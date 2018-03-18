interface OrderRecord {
    ordNo: string//订单编号
    goodsNm: string //商品名称
    amt: string//交易金额
    ordTm: string//订单时间
    ordSts: number//订单状态
}

class UserInfo {
    usrId: string;//用户id
    unionId: string;//唯一标识
    flag: boolean;//权鉴
    records: Array<OrderRecord>;//购买记录
    mbNo: string;//手机号
    amt: number;//用户余额，单位分
    memflag: boolean;//会员标识
    timeout: string;//会员到期时间 
}