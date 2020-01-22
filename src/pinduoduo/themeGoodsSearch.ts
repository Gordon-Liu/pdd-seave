import { ErrorResponse, getErrorResponse, getGoods } from './index'
import { pddRequest } from './pddRequest'
import { Goods } from '../interface/pinduoduo'

interface ThemeGoodsSearchParams {
    type: string
    theme_id: number
}

export interface ThemeGoodsSearchOptions {
    themeId: number
}
export type ThemeGoodsSearchResponse = ErrorResponse |  {
    goodsList: Array<Goods>
    total: number
}

export async function themeGoodsSearchRequest (options: ThemeGoodsSearchOptions): Promise<ThemeGoodsSearchResponse> {
    let params: ThemeGoodsSearchParams = {
        type: 'pdd.ddk.theme.goods.search',
        theme_id: options.themeId
    }
    let data: any = JSON.parse(await pddRequest<ThemeGoodsSearchParams>(params))
    if (!data.error_response) {
        console.log(data.theme_list_get_response.goods_list[0])
        let goodsList: Array<Goods> = (<Array<Goods>>data.theme_list_get_response.goods_list).map<Goods>(function (item: any): Goods {
            return getGoods(item)
        })
        return {
            goodsList: goodsList,
            total: data.theme_list_get_response.total
        }
    } else {
        return getErrorResponse(data)
    }
}