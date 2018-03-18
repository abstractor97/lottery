interface Lottery {
    ltNo: string,
    openNo: string
}

class LotteryInfo {
    ltNo: string; //彩票编号
    records: Array<Lottery>;//彩票历史记录
}