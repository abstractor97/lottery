
class UserInfoProxy extends ResourceProxyBase {
    public static NAME: string = 'UserInfoProxy';

    private vo: UserInfo = new UserInfo();

    public constructor() {
        super(UserInfoProxy.NAME);
    }

    public set usrId(usrId: string) {
        this.vo.usrId = usrId;
    }

    public get usrId(): string {
        return this.vo.usrId;
    }

    public set unionId(unionId: string) {
        this.vo.unionId = unionId;
    }

    public get unionId(): string {
        return this.vo.unionId;
    }

    public set flag(flag: boolean) {
        this.vo.flag = flag;
    }

    public get flag(): boolean {
        return this.vo.flag;
    }

    public set mbNo(mbNo: string) {
        this.vo.mbNo = mbNo;
    }

    public get mbNo(): string {
        return this.vo.mbNo;
    }

    public set amt(amt: number) {
        this.vo.amt = amt;
    }

    public get amt(): number {
        return this.vo.amt;
    }

    public set memflag(memflag: boolean) {
        this.vo.memflag = memflag;
    }

    public get memflag(): boolean {
        return this.vo.memflag;
    }

    public set timeout(timeout: string) {
        this.vo.timeout = timeout;
    }

    public get timeout(): string {
        return this.vo.timeout;
    }

    public set records(records: Array<OrderRecord>) {
        this.vo.records = records;
    }

    public get records(): Array<OrderRecord> {
        return this.vo.records;
    }

}