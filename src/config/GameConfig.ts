
class GameConfig {

    public static THM_VERSION: string = '0.1.5';
    public static RES_VERSION: string = '0.1.5';


    //是否是native环境，1是，0不是
    public static isnative: number = egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE ? 1 : 0;

    //全局字体颜色表--可以扩展
    public static TextColors = {
        white: 0xFFFFFF,//白色
        milkWhite: 0xfbf1af,//乳白色 
        grayWhite: 0xceb6a2,//灰白色
        yellow: 0xffff00,//金黄色 
        lightYellow: 0xffd375,//淡黄色
        orangeYellow: 0xff9900,//橘黄色//道具名称 //玩家姓名
        red: 0xf11300,//红色
        green: 0x00e500,//绿色 
        blue: 0x1a94d7,//蓝色 
        grayBlue: 0x2f5177,//墨蓝色 
        purple: 0xe938f2,//紫色 
        pink: 0xFF3030,//粉色 
        black: 0x2e2d2d,//黑色
        golden: 0xFFD700 //金色
    }

    //全局字体大小表--可以扩展
    public static LabelFontSize = {
        littleSize: 12,//小型字体大小
        middleSize: 18,//中型字体大小
        normalSize: 24,//正常字体大小
        bigSize: 36//大型字体大小
    }

    //当前舞台
    public static get curStage(): egret.Stage {
        return egret.MainContext.instance.stage;
    }

    //当前面板
    public static curPanel: egret.DisplayObjectContainer;

    //当前游戏宽度
    public static get curWidth(): number {
        return egret.MainContext.instance.stage.stageWidth;
    }

    //当前游戏宽度
    public static get curHeight(): number {
        return egret.MainContext.instance.stage.stageHeight;
    }

    public static get gameInterval(): number {
        return RES.getRes('config_json').gameInterval;
    }

    public static get initialVelocity(): number {
        return RES.getRes('config_json').initialVelocity;
    }



    public static get props(): Array<number> {
        return RES.getRes('config_json').props;
    }

    public static get oauthUrl(): string {
        return RES.getRes('config_json').oauthUrl;
    }

    public static get checkChanceUrl(): string {
        return RES.getRes('config_json').checkChanceUrl;
    }

    public static get saveResultUrl(): string {
        return RES.getRes('config_json').saveResultUrl;
    }

    public static get isRegistedUrl(): string {
        return RES.getRes('config_json').isRegistedUrl;
    }

    public static get userRegisterUrl(): string {
        return RES.getRes('config_json').userRegisterUrl;
    }

    public static get onShareUrl(): string {
        return RES.getRes('config_json').onShareUrl;
    }

    public static get getRankUrl(): string {
        return RES.getRes('config_json').getRankUrl;
    }

    public static get getSignPackageUrl(): string {
        return RES.getRes('config_json').getSignPackageUrl;
    }

    public static get honoraryTitle(): Array<string> {
        return RES.getRes('config_json').honoraryTitle;
    }

    public static get grade(): Array<string> {
        return RES.getRes('config_json').grade;
    }

    public static get seal(): Array<string> {
        return RES.getRes('config_json').seal;
    }

    public static get Vehicle(): Array<string> {
        return RES.getRes('config_json').Vehicle;
    }

    public static get rule(): string {
        return RES.getRes('config_json').rule;
    }

    public static get debug(): string {
        return RES.getRes('config_json').debug;
    }

    public static get jumpUrl(): string {
        return RES.getRes('config_json').jumpUrl;
    }

    public static get journey(): number {
        return RES.getRes('config_json').journey;
    }

    public static get getUserInfoUrl(): string {
        let result = RES.getRes('config_json').getUserInfoUrl;
        return result;
    }

    public static get tools(): Array<string> {
        let result = RES.getRes('config_json').tools;
        return result;
    }

    public static get oauthOrg(): Array<string> {
        let result = RES.getRes('config_json').oauthOrg;
        return result;
    }

    public static get shareTitle(): string {
        return RES.getRes('config_json').shareTitle;

    }

    public static get shareContent(): string {
        return RES.getRes('config_json').shareContent;
    }

    public static get shareImgUrl(): string {
        return RES.getRes('config_json').shareImgUrl;
    }

    public static get shareUrl(): string {
        return RES.getRes('config_json').shareUrl;
    }



}