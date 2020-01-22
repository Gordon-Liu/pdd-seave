import express from 'express'
import bodyParser from 'body-parser'
import router from './router/api'
const app: express.Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)

app.get('/', function (req, res) {
    res.send('Hellow World')
})

app.listen(3001, function () {
    console.log('app listening on port 3001')
})