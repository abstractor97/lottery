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
var BaseMediator = (function (_super) {
    __extends(BaseMediator, _super);
    function BaseMediator(mediatorName, viewComponent) {
        if (mediatorName === void 0) { mediatorName = ''; }
        if (viewComponent === void 0) { viewComponent = null; }
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.w = 0;
        _this.h = 0;
        _this.w = GameConfig.curWidth;
        _this.h = GameConfig.curHeight;
        return _this;
    }
    BaseMediator.prototype.showUI = function (effect, data, layer, dark) {
        if (effect === void 0) { effect = ''; }
        if (layer === void 0) { layer = game.LayerManager.PANEL; }
        if (dark === void 0) { dark = true; }
        this.show();
        switch (layer) {
            case game.LayerManager.SCENE:
                game.UIManager.getInstance().changeScene(this.getViewComponent(), effect);
                break;
            case game.LayerManager.VIEW:
                game.UIManager.getInstance().changeView(this.getViewComponent(), effect, dark);
                break;
            case game.LayerManager.PANEL:
                game.UIManager.getInstance().changePanel(this.getViewComponent(), effect, dark);
                break;
            case game.LayerManager.MASK:
                break;
        }
    };
    BaseMediator.prototype.show = function () {
    };
    BaseMediator.prototype.hide = function () {
    };
    BaseMediator.prototype.hideUI = function (effect) {
        if (effect === void 0) { effect = ''; }
        this.hide();
        game.UIManager.getInstance().hidePanel(this.getViewComponent(), effect);
        this.destroy();
    };
    BaseMediator.prototype.destroy = function () {
    };
    BaseMediator.isInitialized = false; //是否初始化
    BaseMediator.isPopUp = false; //是否弹出
    return BaseMediator;
}(puremvc.Mediator));
__reflect(BaseMediator.prototype, "BaseMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
