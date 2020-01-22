import { ErrorResponse, getErrorResponse, getGoods } from './index'
import { pddRequest } from './pddRequest'
import { Goods } from '../interface/pinduoduo'

interface GoodsDetailParams {
    type: string
    goods_id_list: Array<number>
    pid?: string
    custom_parameters?: string
    zs_duo_id?: number
    plan_type?: number
    search_id?: string
}

export interface GoodsDetailOptions {
    goodsIdList: Array<number>
    pid?: string
    customParameters?: string
    zsDuoId?: number
    planType?: number
    searchId?: string
}
export type GoodsDetailResponse = ErrorResponse |  {
    goodsDetails: Array<Goods>
}

export async function goodsDetailRequest (options: GoodsDetailOptions): Promise<GoodsDetailResponse> {
    let params: GoodsDetailParams = {
        type: 'pdd.ddk.goods.detail',
        goods_id_list: options.goodsIdList,
        pid: options.pid,
        custom_parameters: options.customParameters,
        zs_duo_id: options.zsDuoId,
        plan_type: options.planType,
        search_id: options.searchId
    }
    let data: any = JSON.parse(await pddRequest<GoodsDetailParams>(params))
    if (!data.error_response) {
        let goodsDetails: Array<Goods> = (<Array<any>>data.goods_detail_response.goods_details).map<Goods>(function (item): Goods {
            return getGoods(item)
        })
        return {
            goodsDetails: goodsDetails
        }
    } else {
        return getErrorResponse(data)
    }
}
