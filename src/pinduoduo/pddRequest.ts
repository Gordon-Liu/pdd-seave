import http from 'http'
import crypto from 'crypto'

const clientId: string = 'cf46b4ef64c24a86b34fca468d636f8b'
const clientSecret: string = 'ad21a79c8709cbb95270770251df7c623a2441f9'

type Params<T> = T & {
    client_id: string
    data_type: string
    timestamp: number
    sign?: string
}

export function pddRequest<T> (currentParams: T): Promise<string> {
    let params: Params<T> = {
        client_id: clientId,
        data_type: 'JSON',
        timestamp: new Date().getTime(),
        ...currentParams
    }
    params.sign = getSign<Params<T>>(params, clientSecret)
    return new Promise((resolve, reject) => {
        let req: http.ClientRequest = http.request({
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            host: 'gw-api.pinduoduo.com',
            method: 'POST',
            path: '/api/router?' + getQurey<Params<T>>(params),
            protocol: 'http:'
        }, function (res: http.IncomingMessage) {
            res.setEncoding('utf8')
            let buffers: Array<Buffer> = []
            let bufferLength: number = 0
            let strings: Array<string> = []
            res.on('data', function (chunk) {
                if (!Buffer.isBuffer(chunk)) {
                    strings.push(chunk)
                } else if (chunk.length) {
                    bufferLength += chunk.length
                    buffers.push(chunk)
                }
            })
            res.on('end', function () {
                let body: string = ''
                if (bufferLength) {
                    body = Buffer.concat(buffers, bufferLength).toString('utf8')
                    buffers = []
                    bufferLength = 0
                } else if (strings.length) {
                    if (strings[0].length > 0 && strings[0][0] === '\uFEFF') {
                        strings[0] = strings[0].substring(1)
                    }
                    body = strings.join('')
                }
                resolve(body)
            })
        })
        req.on('error', function (error: Error) {
            console.log(error)
            reject(error)
        })
        req.end()
    })
}

function getSign<T> (params: T, clientSecret: string): string {
    return crypto.createHash('md5').update(clientSecret + Object.keys(params).sort().map(function (key) {
        if (params[<keyof T>key] === undefined) {
            return ''
        } else {
            return key + params[<keyof T>key]
        }
    }).join('') + clientSecret).digest('hex').toUpperCase()
}

function getQurey<T> (params: T): string {
    return Object.keys(params).filter(function (key) {
        return params[<keyof T>key] !== undefined
    }).map(function (key) {
        return key + '=' + params[<keyof T>key]
    }).join('&')
}