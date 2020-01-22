import { ErrorResponse, getErrorResponse } from './index'
import { pddRequest } from './pddRequest'
import { Theme } from '../interface/pinduoduo'
interface ThemeListGetParams {
    type: string
    page_size?: number
    page?: number
}

export interface ThemeListGetOptions {
    pageSize?: number
    page?: number
}
export type ThemeListGetResponse = ErrorResponse | {
    themeList: Array<Theme> 
    total: number
}

export async function themeListGetRequest (options: ThemeListGetOptions): Promise<ThemeListGetResponse> {
    let params: ThemeListGetParams = {
        type: 'pdd.ddk.theme.list.get',
        page_size: options.pageSize,
        page: options.page
    }
    let data: any = JSON.parse(await pddRequest<ThemeListGetParams>(params))
    if (!data.error_response) {
        let themeList: Array<Theme> = (<Array<any>>data.theme_list_get_response.theme_list).map<Theme>(function (item: any): Theme {
            return {
                goodsNum: item.goods_num,
                id: item.id,
                imageUrl: item.image_url,
                name: item.name
            }
        })
        return {
            themeList: themeList,
            total: data.theme_list_get_response.total
        }
    } else {
        return getErrorResponse(data)
    }
}

