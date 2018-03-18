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
var RankItem = (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "skin.RankItem";
        return _this;
    }
    RankItem.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        egret.setTimeout(function () {
            if (Number(_this.data.rank) < 4 && Number(_this.data.rank) > 0) {
                _this.icon.source = RES.getRes("rank" + Number(_this.data.rank) + "_png");
            }
            else {
                _this.icon.visible = false;
            }
            if (_this.data.bindFlag == 1) {
                _this.bind_flag.visible = true;
            }
        }, this, 50);
    };
    return RankItem;
}(eui.ItemRenderer));
__reflect(RankItem.prototype, "RankItem", ["eui.IItemRenderer", "eui.UIComponent", "egret.DisplayObject"]);
