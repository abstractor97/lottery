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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var bgMusic = new SoundManager();
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.text = '0%';
        this.textField.y = 518 - this.textField.height / 2;
        this.textField.x = 320 - this.textField.width / 2;
        this.textField.textColor = 0x000000;
        // this.textField.y = 300;
        // this.textField.width = 480;
        // this.textField.height = 100;
        // this.textField.textAlign = "center";
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        var perc = Math.floor(current * 100 / total);
        this.textField.text = perc + "%";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
