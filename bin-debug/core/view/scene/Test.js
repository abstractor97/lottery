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
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super.call(this) || this;
        _this.startPoint = new egret.Point();
        _this.endPoint = new egret.Point();
        _this.skinName = "skin.Test";
        return _this;
    }
    Test.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchMove, this);
        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEnd, this);
        this.litScroller.scrollPolicyH = eui.ScrollPolicy.OFF;
    };
    Test.prototype.onTouchBegin = function (e) {
        this.startPoint.x = e.stageX;
        this.startPoint.y = e.stageY;
    };
    Test.prototype.onTouchMove = function (e) {
        console.log(e.stageX);
        this.bigScroller.viewport.scrollH = this.bigScroller.viewport.scrollH + e.stageX - this.startPoint.x;
    };
    Test.prototype.onTouchEnd = function (e) {
    };
    return Test;
}(eui.Component));
__reflect(Test.prototype, "Test");
