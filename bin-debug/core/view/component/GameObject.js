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
var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject(type) {
        var _this = _super.call(this) || this;
        _this.$Htype = 0;
        _this.initUi(type);
        _this.$Htype = type;
        return _this;
    }
    Object.defineProperty(GameObject.prototype, "Htype", {
        get: function () {
            return this.$Htype;
        },
        set: function (type) {
            this.$Htype = type;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.initUi = function (type) {
        var obj;
        switch (type) {
            case -1:
                var random = RandomUtils.limitInteger(0, 2);
                obj = Tools.createBitmapByName("game_obj" + random + "_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                obj.width = obj.width * 1.2;
                obj.height = obj.height * 1.2;
                this.addChild(obj);
                break;
            case 1:
                console.log("1111");
                var random = RandomUtils.limitInteger(0, 3);
                obj = Tools.createBitmapByName("score_item_1_" + random + "_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;
            case 2:
                console.log("2222");
                obj = Tools.createBitmapByName("score_item_2_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;
            case 3:
                console.log("333");
                obj = Tools.createBitmapByName("score_item_3_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;
            case 4:
                console.log("333");
                obj = Tools.createBitmapByName("score_item_4_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;
        }
    };
    GameObject.prototype.addText = function (txt) {
        var textfeild = Tools.createBitmapByName(txt);
        this.addChild(textfeild);
        textfeild.x = 5;
        textfeild.y = 6;
    };
    GameObject.prototype.onDestroy = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    GameObject.prototype.onCreate = function () {
    };
    return GameObject;
}(egret.Sprite));
__reflect(GameObject.prototype, "GameObject");
