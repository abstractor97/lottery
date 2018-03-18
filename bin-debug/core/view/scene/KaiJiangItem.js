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
var KaiJiangItem = (function (_super) {
    __extends(KaiJiangItem, _super);
    function KaiJiangItem() {
        var _this = _super.call(this) || this;
        _this.once(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "KaiJiangItemSkin";
        return _this;
    }
    KaiJiangItem.prototype.onComplete = function () {
        this.cacheAsBitmap = true;
        var self = this;
        setTimeout(function () {
            var peroid = parseInt(self.data.period);
            if (peroid % 2 == 0) {
                self.bg.visible = false;
            }
        }, 100);
    };
    return KaiJiangItem;
}(eui.ItemRenderer));
__reflect(KaiJiangItem.prototype, "KaiJiangItem");
