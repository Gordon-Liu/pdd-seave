export interface Theme {
    goodsNum: number
    id: number
    imageUrl: string
    name: string
}

export interface Goods {
    activityTags: Array<number> // 商品活动标记数组，例：[4,7]，4-秒杀 7-百亿补贴等
    activityType: number // 活动类型，0-无活动;1-秒杀;3-限量折扣;12-限时折扣;13-大促活动;14-名品折扣;15-品牌清仓;16-食品超市;17-一元幸运团;18-爱逛街;19-时尚穿搭;20-男人帮;21-9块9;22-竞价活动;23-榜单活动;24-幸运半价购;25-定金预售;26-幸运人气购;27-特色主题活动;28-断码清仓;29-一元话费;30-电器城;31-每日好店;32-品牌卡;101-大促搜索池;102-大促品类分会场;
    catId: string // 商品类目id
    catIds: Array<number> // 商品一~四级类目ID列表
    categoryId: number // 商品类目ID，使用pdd.goods.cats.get接口获取
    categoryName: string // 商品类目名
    cltCpnBatchSn: string // 店铺收藏券id
    cltCpnDiscount: number // 店铺收藏券面额，单位为分
    cltCpnEndTime: number // 店铺收藏券截止时间
    cltCpnMinAmt: number // 店铺收藏券使用门槛价格，单位为分
    cltCpnQuantity: number // 店铺收藏券总量
    cltCpnRemainQuantity: number // 店铺收藏券剩余量
    cltCpnStartTime: number // 店铺收藏券起始时间
    couponDiscount: number // 优惠券面额,单位为分
    couponEndTime: number // 优惠券失效时间,UNIX时间戳
    couponId:  number // 优惠券id
    couponMinOrderAmount: number // 优惠券门槛价格,单位为分
    couponRemainQuantity: number // 优惠券剩余数量
    couponStartTime: number // 优惠券生效时间,UNIX时间戳
    couponTotalQuantity: number // 优惠券总数量
    // cpsSign:
    createAt: number // 创建时间（unix时间戳）
    // crtRfOrdrRto1m: number
    descTxt: string // 描述分
    goodsDesc: string // 商品描述
    goodsEvalCount: number // 商品评价数量
    goodsGalleryUrls:  Array<string> // 商品详情图列表 轮播图
    goodsId: number // 商品编码
    goodsImageUrl: string // 商品主图
    goodsName: string // 商品名称
    goodsThumbnailUrl: string // 商品缩略图
    hasCoupon: boolean // 商品是否带券,true-带券,false-不带券
    hasMallCoupon: boolean // 是否有店铺券
    lgstTxt: string // 物流分
    mallCouponDiscountPct: number // 店铺券折扣
    mallCouponEndTime: number // 店铺券结束使用时间
    mallCouponId: number // 店铺券id
    mallCouponMaxDiscountAmount: number // 最大使用金额
    mallCouponMinOrderAmount: number // 最小使用金额
    mallCouponRemainQuantity: number // 店铺券余量
    mallCouponStartTime: number // 店铺券开始使用时间
    mallCouponTotalQuantity: number // 店铺券总量
    mallCps: number // 该商品所在店铺是否参与全店推广，0：否，1：是
    mallId: number // 商家id
    mallName: string // 店铺名称
    // mallRate: number
    merchantType: number // 店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店
    minGroupPrice: number // 最小拼团价格,单位为分
    minNormalPrice: number // 最小单买价格,单位为分
    onlySceneAuth: boolean // 快手专享
    optId: number // 商品标签类目ID,使用pdd.goods.opt.get获取
    optIds: Array<number> // 商品标签id
    optName: string // 商品标签名
    planType: number // 推广计划类型 3:定向 4:招商
    // planTypeAll: number
    promotionRate: number // 佣金比例,千分比
    salesTip: string // 已售卖件数
    searchId: string // 搜索id
    servTxt: string // 服务分
    serviceTags: Array<number> // 服务标签: 4-送货入户并安装,5-送货入户,6-电子发票,9-坏果包赔,11-闪电退款,12-24小时发货,13-48小时发货,17-顺丰包邮,18-只换不修,19-全国联保,20-分期付款,24-极速退款,25-品质保障,26-缺重包退,27-当日发货,28-可定制化,29-预约配送,1000001-正品发票,1000002-送货入户并安装
    zsDuoId: number // 招商团长id
}