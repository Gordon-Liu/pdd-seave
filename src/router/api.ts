import express from 'express'
import * as goods from '../controller/goods'
const router: express.Router = express.Router()

router.post(
    '/pdd/ddk/theme/list/get',
    goods.themeListGet
)

router.post(
    '/pdd/ddk/theme/goods/search',
    goods.themeGoodsSearch
)

router.post(
    '/pdd/ddk/goods/search',
    goods.goodsSearch
)

router.post(
    '/pdd/ddk/top/goods/list/query',
    goods.topGoodsListQuery
)

router.post(
    '/pdd/ddk/goods/recommend/get',
    goods.goodsRecommendGet
)

router.post(
    '/pdd/ddk/goods/detail',
    goods.goodsDetail
)

export default router