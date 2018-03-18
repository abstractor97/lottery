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
/**
 *
 * @author
 *
 */
var StateButtonEff = (function (_super) {
    __extends(StateButtonEff, _super);
    function StateButtonEff() {
        var _this = _super.call(this) || this;
        _this._bg = new egret.Bitmap;
        _this.state = 1;
        return _this;
    }
    StateButtonEff.prototype.create = function (img, img1, angel) {
        this._angel = angel;
        this._img = img;
        this._img1 = img1;
        this.updateState(1);
        this.addChild(this._bg);
        this.anchorOffsetX = this._bg.width / 2;
        this.anchorOffsetY = this._bg.height / 2;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnClick, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this);
    };
    StateButtonEff.prototype.updateState = function (s) {
        this.state = s;
        if (this.state == 1) {
            this._bg.texture = RES.getRes(this._img);
        }
        else {
            this._bg.texture = RES.getRes(this._img1);
        }
    };
    StateButtonEff.prototype.btnClick = function (event) {
        var sp = event.currentTarget;
        if (event.type == egret.TouchEvent.TOUCH_BEGIN) {
            egret.Tween.removeTweens(sp);
            egret.Tween.get(sp).to({ rotation: this._angel, scaleX: 0.8, scaleY: 0.8 }, 300);
        }
        else if (event.type == egret.TouchEvent.TOUCH_END) {
            egret.Tween.removeTweens(sp);
            egret.Tween.get(sp).to({ rotation: 0, scaleX: 1, scaleY: 1 }, 300);
        }
    };
    StateButtonEff.create = function (img, img1, angel) {
        var btn = new StateButtonEff;
        btn.create(img, img1, angel);
        return btn;
    };
    return StateButtonEff;
}(egret.Sprite));
__reflect(StateButtonEff.prototype, "StateButtonEff");
