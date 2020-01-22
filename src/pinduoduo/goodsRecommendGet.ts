import { ErrorResponse, getErrorResponse, getGoods } from './index'
import { pddRequest } from './pddRequest'
import { Goods } from '../interface/pinduoduo'

interface GoodsRecommendGetParams {
    type: string
    pid?: string
    offset?: number
    channel_type?: number
    limit?: number
    custom_parameters?: string
}
export interface GoodsRecommendGetOptions {
    pid?: string
    offset?: number
    channelType?: number
    limit?: number
    customParameters?: string
}
export type GoodsRecommendGetResponse = ErrorResponse |  {
    list: Array<Goods>
    total: number,
    searchId: string
}

export async function goodsRecommendGetRequest (options: GoodsRecommendGetOptions): Promise<GoodsRecommendGetResponse> {
    let params: GoodsRecommendGetParams = {
        type: 'pdd.ddk.goods.recommend.get',
        pid: options.pid,
        offset: options.offset,
        channel_type: options.channelType,
        limit: options.limit,
        custom_parameters: options.customParameters
    }
    let data: any = JSON.parse(await pddRequest<GoodsRecommendGetParams>(params))
    if (!data.error_response) {
        let list: Array<Goods> = (<Array<Goods>>data.goods_basic_detail_response.list).map<Goods>(function (item: any): Goods {
            return getGoods(item)
        })
        return {
            list: list,
            total: data.goods_basic_detail_response.total,
            searchId: data.goods_basic_detail_response.search_id
        }
    } else {
        return getErrorResponse(data)
    }
}