var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var LayerManager = (function () {
        function LayerManager() {
        }
        LayerManager.getInstance = function () {
            if (!this.Ins) {
                this.Ins = new LayerManager();
            }
            return this.Ins;
        };
        LayerManager.prototype.init = function () {
            this.sceneLayer = new eui.UILayer();
            this.viewLayer = new eui.UILayer();
            this.panelLayer = new eui.UILayer();
            this.maskLayer = new eui.UILayer();
            this.sceneLayer.touchThrough = true;
            this.viewLayer.touchThrough = true;
            this.panelLayer.touchThrough = true;
            this.maskLayer.touchThrough = true;
            this.sceneLayer.touchEnabled = false;
            this.viewLayer.touchEnabled = false;
            this.panelLayer.touchEnabled = false;
            this.maskLayer.touchEnabled = false;
            var stage = egret.MainContext.instance.stage;
            stage.addChild(this.sceneLayer);
            stage.addChild(this.viewLayer);
            stage.addChild(this.panelLayer);
            stage.addChild(this.maskLayer);
            // StageBtnUtils.init();
        };
        LayerManager.SCENE = 1;
        LayerManager.VIEW = 2;
        LayerManager.PANEL = 3;
        LayerManager.MASK = 4;
        return LayerManager;
    }());
    game.LayerManager = LayerManager;
    __reflect(LayerManager.prototype, "game.LayerManager");
})(game || (game = {}));
