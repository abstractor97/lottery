var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameVOProxy = (function (_super) {
    __extends(GameVOProxy, _super);
    function GameVOProxy() {
        var _this = _super.call(this, GameVOProxy.NAME) || this;
        _this.vo = new GameVO();
        return _this;
    }
    Object.defineProperty(GameVOProxy.prototype, "openId", {
        get: function () {
            return this.vo.openId;
        },
        set: function (openId) {
            console.log('set openid', openId);
            this.vo.openId = openId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "nickName", {
        get: function () {
            return this.vo.nickName;
        },
        set: function (nickName) {
            this.vo.nickName = nickName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "headImgUrl", {
        get: function () {
            return this.vo.headImgUrl;
        },
        set: function (headImgUrl) {
            this.vo.headImgUrl = headImgUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "costTimes", {
        get: function () {
            return this.vo.costTimes;
        },
        set: function (costTimes) {
            this.vo.costTimes = costTimes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "showTimes", {
        get: function () {
            return this.vo.showTimes;
        },
        set: function (showTimes) {
            this.vo.showTimes = showTimes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "sign", {
        get: function () {
            return this.vo.sign;
        },
        set: function (sign) {
            this.vo.sign = sign;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "userName", {
        get: function () {
            return this.vo.userName;
        },
        set: function (userName) {
            this.vo.userName = userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "userTel", {
        get: function () {
            return this.vo.userTel;
        },
        set: function (userTel) {
            this.vo.userTel = userTel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "hasChance", {
        get: function () {
            return this.vo.hasChance;
        },
        set: function (hasChance) {
            this.vo.hasChance = hasChance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameVOProxy.prototype, "isbind", {
        get: function () {
            return this.vo.isbind;
        },
        set: function (isbind) {
            this.vo.isbind = isbind;
        },
        enumerable: true,
        configurable: true
    });
    GameVOProxy.prototype.costTimeToShowTime = function () {
        var costtimes = this.vo.costTimes;
        if (costtimes >= 0 && costtimes <= 25) {
            this.vo.showTimes = Math.floor(this.vo.costTimes * 6) + '秒';
        }
        else if (costtimes > 25 && costtimes <= 50) {
            this.vo.showTimes = Math.floor(this.vo.costTimes * 1.2) + '分钟';
        }
        else if (costtimes > 50 && costtimes <= 70) {
            this.vo.showTimes = Math.floor(this.vo.costTimes * 0.4) + '小时';
        }
        else if (costtimes > 70 && costtimes <= 80) {
            this.vo.showTimes = Math.floor(this.vo.costTimes * 0.5) + '天';
        }
        else if (costtimes > 80 && costtimes <= 90) {
            this.vo.showTimes = Math.floor(this.vo.costTimes * 0.2) + '月';
        }
        else {
            this.vo.showTimes = Math.floor(this.vo.costTimes * 0.2) + '年';
        }
    };
    GameVOProxy.NAME = 'GameVOProxy';
    return GameVOProxy;
}(ResourceProxyBase));
__reflect(GameVOProxy.prototype, "GameVOProxy");
