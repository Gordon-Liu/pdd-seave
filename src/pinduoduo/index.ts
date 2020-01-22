import { Goods } from '../interface/pinduoduo'

export interface ErrorResponse {
    subMsg: string
    subCode: number | null
    errorMsg: string
    errorCode: number
    requestId: number
}

export * from './themeListGet'
export * from './themeGoodsSearch'
export * from './goodsSearch'
export * from './topGoodsListQuery'
export * from './goodsRecommendGet'
export * from './goodsDetail'

export function getGoods (data: any): Goods {
    return {
        activityTags: data.activity_tags,
        activityType: data.activity_type,
        catId: data.cat_id,
        catIds: data.cat_ids,
        categoryId: data.category_id,
        categoryName: data.category_name,
        cltCpnBatchSn: data.clt_cpn_batch_sn,
        cltCpnDiscount: data.clt_cpn_discount,
        cltCpnEndTime: data.clt_cpn_end_time,
        cltCpnMinAmt: data.clt_cpn_min_amt,
        cltCpnQuantity: data.clt_cpn_quantity,
        cltCpnRemainQuantity: data.clt_cpn_remain_quantity,
        cltCpnStartTime: data.clt_cpn_start_time,
        couponDiscount: data.coupon_discount,
        couponEndTime: data.coupon_end_time,
        couponId: data.coupon_id,
        couponMinOrderAmount: data.coupon_min_order_amount,
        couponRemainQuantity: data.coupon_remain_quantity,
        couponStartTime: data.coupon_start_time,
        couponTotalQuantity: data.coupon_total_quantity,
        // cpsSign: data.cps_sign,
        createAt: data.create_at,
        // crtRfOrdrRto1m: data.crt_rf_ordr_rto1m,
        descTxt: data.desc_txt,
        goodsDesc: data.goods_desc,
        goodsEvalCount: data.goods_eval_count,
        goodsGalleryUrls: data.goods_gallery_urls,
        goodsId: data.goods_id,
        goodsImageUrl: data.goods_image_url,
        goodsName: data.goods_name,
        goodsThumbnailUrl: data.goods_thumbnail_url,
        hasCoupon: data.has_coupon,
        hasMallCoupon: data.has_mall_coupon,
        lgstTxt: data.lgst_txt,
        mallCouponDiscountPct: data.mall_coupon_discount_pct,
        mallCouponEndTime: data.mall_coupon_end_time,
        mallCouponId: data.mall_coupon_id,
        mallCouponMaxDiscountAmount: data.mall_coupon_max_discount_amount,
        mallCouponMinOrderAmount: data.mall_coupon_min_order_amount,
        mallCouponRemainQuantity: data.mall_coupon_remain_quantity,
        mallCouponStartTime: data.mall_coupon_start_time,
        mallCouponTotalQuantity: data.mall_coupon_total_quantity,
        mallCps: data.mall_cps,
        mallId: data.mall_id,
        mallName: data.mall_name,
        // mallRate: data.mall_rate,
        merchantType: data.merchant_type,
        minGroupPrice: data.min_group_price,
        minNormalPrice: data.min_normal_price,
        onlySceneAuth: data.only_scene_auth,
        optId: data.opt_id,
        optIds: data.opt_ids,
        optName: data.opt_name,
        planType: data.plan_type,
        // planTypeAll: data.plan_type_all,
        promotionRate: data.promotion_rate,
        salesTip: data.sales_tip,
        searchId: data.search_id,
        servTxt: data.serv_txt,
        serviceTags: data.service_tags,
        zsDuoId: data.zs_duo_id
    }
}

export function getErrorResponse (data: any): ErrorResponse {
    return {
        subMsg: data.error_response.sub_msg,
        subCode: data.error_response.sub_code,
        errorMsg: data.error_response.error_msg,
        errorCode: data.error_response.error_code,
        requestId: data.error_response.request_id
    }
}

export function isError (response: any): response is ErrorResponse {
    return !!(<ErrorResponse>response).errorCode
}