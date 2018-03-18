var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConfig = (function () {
    function GameConfig() {
    }
    Object.defineProperty(GameConfig, "curStage", {
        //当前舞台
        get: function () {
            return egret.MainContext.instance.stage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "curWidth", {
        //当前游戏宽度
        get: function () {
            return egret.MainContext.instance.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "curHeight", {
        //当前游戏宽度
        get: function () {
            return egret.MainContext.instance.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "gameInterval", {
        get: function () {
            return RES.getRes('config_json').gameInterval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "initialVelocity", {
        get: function () {
            return RES.getRes('config_json').initialVelocity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "props", {
        get: function () {
            return RES.getRes('config_json').props;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "oauthUrl", {
        get: function () {
            return RES.getRes('config_json').oauthUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "checkChanceUrl", {
        get: function () {
            return RES.getRes('config_json').checkChanceUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "saveResultUrl", {
        get: function () {
            return RES.getRes('config_json').saveResultUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "isRegistedUrl", {
        get: function () {
            return RES.getRes('config_json').isRegistedUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "userRegisterUrl", {
        get: function () {
            return RES.getRes('config_json').userRegisterUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "onShareUrl", {
        get: function () {
            return RES.getRes('config_json').onShareUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "getRankUrl", {
        get: function () {
            return RES.getRes('config_json').getRankUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "getSignPackageUrl", {
        get: function () {
            return RES.getRes('config_json').getSignPackageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "honoraryTitle", {
        get: function () {
            return RES.getRes('config_json').honoraryTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "grade", {
        get: function () {
            return RES.getRes('config_json').grade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "seal", {
        get: function () {
            return RES.getRes('config_json').seal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "Vehicle", {
        get: function () {
            return RES.getRes('config_json').Vehicle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "rule", {
        get: function () {
            return RES.getRes('config_json').rule;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "debug", {
        get: function () {
            return RES.getRes('config_json').debug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "jumpUrl", {
        get: function () {
            return RES.getRes('config_json').jumpUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "journey", {
        get: function () {
            return RES.getRes('config_json').journey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "getUserInfoUrl", {
        get: function () {
            var result = RES.getRes('config_json').getUserInfoUrl;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "tools", {
        get: function () {
            var result = RES.getRes('config_json').tools;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "oauthOrg", {
        get: function () {
            var result = RES.getRes('config_json').oauthOrg;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "shareTitle", {
        get: function () {
            return RES.getRes('config_json').shareTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "shareContent", {
        get: function () {
            return RES.getRes('config_json').shareContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "shareImgUrl", {
        get: function () {
            return RES.getRes('config_json').shareImgUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "shareUrl", {
        get: function () {
            return RES.getRes('config_json').shareUrl;
        },
        enumerable: true,
        configurable: true
    });
    GameConfig.THM_VERSION = '0.1.5';
    GameConfig.RES_VERSION = '0.1.5';
    //是否是native环境，1是，0不是
    GameConfig.isnative = egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE ? 1 : 0;
    //全局字体颜色表--可以扩展
    GameConfig.TextColors = {
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    //全局字体大小表--可以扩展
    GameConfig.LabelFontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        bigSize: 36 //大型字体大小
    };
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
