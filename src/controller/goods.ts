import express from 'express'
import { themeListGetRequest, themeGoodsSearchRequest, ThemeListGetResponse, ThemeGoodsSearchResponse, goodsSearchRequest, GoodsSearchResponse, TopGoodsListQueryResponse, topGoodsListQueryRequest, goodsRecommendGetRequest,  GoodsRecommendGetResponse, goodsDetailRequest, GoodsDetailResponse } from '../pinduoduo'
// interface ResponseBody<T = any> {
//     code: number
//     message: string
//     data: T
// }
export async function themeListGet (
    req: express.Request,
    res: express.Response
): Promise<void> {
    let response: ThemeListGetResponse = await themeListGetRequest({
        page: req.body.page,
        pageSize: req.body.pageSize
    })
    res.json({
        code: 0,
        message: '',
        data: response
    })
}

export async function themeGoodsSearch (
    req: express.Request,
    res: express.Response
): Promise<void> {
    let response: ThemeGoodsSearchResponse = await themeGoodsSearchRequest({
        themeId: req.body.themeId
    })
    res.json({
        code: 0,
        message: '',
        data: response
    })
}

export async function goodsSearch (
    req: express.Request,
    res: express.Response
): Promise<void> {
    let response: GoodsSearchResponse = await goodsSearchRequest({
        keyword: req.body.keyword,
        optId: req.body.optId,
        page: req.body.page,
        pageSize: req.body.pageSize,
        sortType: req.body.sortType,
        withCoupon: req.body.withCoupon,
        rangeList: req.body.rangeList,
        catId: req.body.catId,
        goodsIdList: req.body.goodsIdList,
        merchantType: req.body.merchantType,
        pid: req.body.pid,
        customParameters: req.body.customParameters,
        merchantTypeList: req.body.merchantTypeList,
        isBrandGoods: req.body.isBrandGoods,
        activityTags: req.body.activityTags
    })
    res.json({
        code: 0,
        message: '',
        data: response
    })
}

export async function topGoodsListQuery (
    req: express.Request,
    res: express.Response
): Promise<void> {
    let response: TopGoodsListQueryResponse = await topGoodsListQueryRequest({
        pId: req.body.pId,
        offset: req.body.offset,
        sortType: req.body.sortType,
        limit: req.body.limit
    })
    res.json({
        code: 0,
        message: '',
        data: response
    })
}

export async function goodsRecommendGet (
    req: express.Request,
    res: express.Response
): Promise<void> {
    let response: GoodsRecommendGetResponse = await goodsRecommendGetRequest({
        pid: req.body.pid,
        offset: req.body.offset,
        channelType: req.body.channelType,
        limit: req.body.limit,
        customParameters: req.body.customParameters
    })
    res.json({
        code: 0,
        message: '',
        data: response
    })
}

export async function goodsDetail (
    req: express.Request,
    res: express.Response
): Promise<void> {
    let response: GoodsDetailResponse = await goodsDetailRequest({
        goodsIdList: req.body.goodsIdList,
        pid: req.body.pid,
        customParameters: req.body.customParameters,
        zsDuoId: req.body.zsDuoId,
        planType: req.body.planType,
        searchId: req.body.searchId
    })
    res.json({
        code: 0,
        message: '',
        data: response
    })
}