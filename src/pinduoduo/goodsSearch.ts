import { ErrorResponse, getErrorResponse, getGoods } from './index'
import { pddRequest } from './pddRequest'
import { Goods } from '../interface/pinduoduo'

interface GoodsSearchParams {
    type: string,
    keyword?: string
    opt_id?: number
    page?: number
    page_size?: number
    sort_type?: number
    with_coupon?: boolean
    range_list?: string 
    cat_id?: number
    goods_id_list?: Array<number>
    melrchant_type?: number
    pid?: string
    custom_parameters?: string
    merchant_typeList?: Array<number>
    is_brand_goods?: boolean
    activity_tags?: Array<number>
}

export interface GoodsSearchOptions {
    keyword?: string // 商品关键词，与opt_id字段选填一个或全部填写
    optId?: number // 商品标签类目ID，使用pdd.goods.opt.get获取
    page?: number // 默认值1，商品分页数
    pageSize?: number // 默认100，每页商品数量
    sortType?: number // 排序方式:0-综合排序;1-按佣金比率升序;2-按佣金比例降序;3-按价格升序;4-按价格降序;5-按销量升序;6-按销量降序;7-优惠券金额排序升序;8-优惠券金额排序降序;9-券后价升序排序;10-券后价降序排序;11-按照加入多多进宝时间升序;12-按照加入多多进宝时间降序;13-按佣金金额升序排序;14-按佣金金额降序排序;15-店铺描述评分升序;16-店铺描述评分降序;17-店铺物流评分升序;18-店铺物流评分降序;19-店铺服务评分升序;20-店铺服务评分降序;27-描述评分击败同类店铺百分比升序，28-描述评分击败同类店铺百分比降序，29-物流评分击败同类店铺百分比升序，30-物流评分击败同类店铺百分比降序，31-服务评分击败同类店铺百分比升序，32-服务评分击败同类店铺百分比降序
    withCoupon?: boolean // 是否只返回优惠券的商品，false返回所有商品，true只返回有优惠券的商品
    rangeList?: string // 筛选范围列表 样例：[{"range_id":0,"range_from":1,"range_to":1500},{"range_id":1,"range_from":1,"range_to":1500}] range_id枚举及描述： 0，最小成团价 1，券后价 2，佣金比例 3，优惠券价格 4，广告创建时间 5，销量 6，佣金金额 7，店铺描述分 8，店铺物流分 9，店铺服务分 10， 店铺描述分击败同行业百分比 11， 店铺物流分击败同行业百分比 12，店铺服务分击败同行业百分比 13，商品分 17 ，优惠券/最小团购价 18，过去两小时pv 19，过去两小时销量
    catId?: number // 商品类目ID，使用pdd.goods.cats.get接口获取
    goodsIdList?: Array<number> // 商品ID列表。例如：[123456,123]，当入参带有goods_id_list字段，将不会以opt_id、 cat_id、keyword维度筛选商品
    merchantType?: number // 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店（未传为全部）
    pid?: string // 推广位id
    customParameters?: string // 自定义参数
    merchantTypeList?: Array<number> // 店铺类型数组
    isBrandGoods?: boolean // 是否为品牌商品
    activityTags?: Array<number> // 商品活动标记数组，例：[4,7]，4-秒杀 7-百亿补贴等
}
export type GoodsSearchResponse = ErrorResponse | {
    goodsList: Array<Goods>
    totalCount: string
    searchId: string
}
export async function goodsSearchRequest (options: GoodsSearchOptions): Promise<GoodsSearchResponse> {
    let params: GoodsSearchParams = {
        type: 'pdd.ddk.goods.search',
        keyword: options.keyword,
        opt_id: options.optId,
        page: options.page,
        page_size: options.pageSize,
        sort_type: options.sortType,
        with_coupon: options.withCoupon,
        range_list: options.rangeList, 
        cat_id: options.catId,
        goods_id_list: options.goodsIdList,
        melrchant_type: options.merchantType,
        pid: options.pid,
        custom_parameters: options.customParameters,
        merchant_typeList: options.merchantTypeList,
        is_brand_goods: options.isBrandGoods,
        activity_tags: options.activityTags
    }
    let data: any = JSON.parse(await pddRequest<GoodsSearchParams>(params))
    if (!data.error_response) {
        let goodsList: Array<Goods> = (<Array<any>>data.goods_search_response.goods_list).map<Goods>(function (item: any): Goods {
            return getGoods(item)
        })
        return {
            goodsList: goodsList,
            totalCount: data.goods_search_response.total,
            searchId: data.goods_search_response.search_id
        }
    } else {
        return getErrorResponse(data)
    }
}