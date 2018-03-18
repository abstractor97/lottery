class LotteryInfoProxy extends ResourceProxyBase {
    public static NAME: string = 'LotteryInfoProxy';

    private vo: LotteryInfo = new LotteryInfo();

    public constructor() {
        super(LotteryInfoProxy.NAME);
    }

    public set ltNo(ltNo: string) {
        this.vo.ltNo = ltNo;
    }

    public get ltNo(): string {
        return this.vo.ltNo;
    }

    public set records(records: Array<Lottery>) {
        this.vo.records = records;
    }

    public get records(): Array<Lottery> {
        return this.vo.records;
    }
}