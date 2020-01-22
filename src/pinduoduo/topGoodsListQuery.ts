import { ErrorResponse, getErrorResponse, getGoods } from './index'
import { pddRequest } from './pddRequest'
import { Goods } from '../interface/pinduoduo'

interface TopGoodsListQueryParams {
    type: string
    p_id?: string
    offset?: number
    sort_type?: number
    limit?: number
}

export interface TopGoodsListQueryOptions {
    pId?: string
    offset?: number
    sortType?: number
    limit?: number
}
export type TopGoodsListQueryResponse = ErrorResponse |  {
    list: Array<Goods>
    total: number,
    searchId: string
}

export async function topGoodsListQueryRequest (options: TopGoodsListQueryOptions): Promise<TopGoodsListQueryResponse> {
    let params: TopGoodsListQueryParams = {
        type: 'pdd.ddk.top.goods.list.query',
        p_id: options.pId,
        offset: options.offset,
        sort_type: options.sortType,
        limit: options.limit
    }
    let data: any = JSON.parse(await pddRequest<TopGoodsListQueryParams>(params))
    if (!data.error_response) {
        let list: Array<Goods> = (<Array<any>>data.top_goods_list_get_response.list).map<Goods>(function (item: any): Goods {
            return getGoods(item)
        })
        return {
            list: list,
            total: data.top_goods_list_get_response.total,
            searchId: data.top_goods_list_get_response.search_id
        }
    } else {
        return getErrorResponse(data)
    }
}