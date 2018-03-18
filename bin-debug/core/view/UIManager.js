var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var UIManager = (function () {
        function UIManager() {
            this.darkSprite = new egret.Sprite();
            this.darkSprite.graphics.clear();
            this.darkSprite.graphics.beginFill(0x000000, 0.3);
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth, GameConfig.curHeight);
            this.darkSprite.graphics.endFill();
            this.darkSprite.width = GameConfig.curWidth;
            this.darkSprite.height = GameConfig.curHeight;
            this.darkSprite.touchEnabled = true;
            this.viewDarkSprite = new egret.Sprite();
            this.viewDarkSprite.graphics.clear();
            this.viewDarkSprite.graphics.beginFill(0x000000, 0.3);
            this.viewDarkSprite.graphics.drawRect(0, 0, GameConfig.curWidth, GameConfig.curHeight);
            this.viewDarkSprite.graphics.endFill();
            this.viewDarkSprite.width = GameConfig.curWidth;
            this.viewDarkSprite.height = GameConfig.curHeight;
            this.viewDarkSprite.touchEnabled = true;
        }
        UIManager.getInstance = function () {
            if (!this.ins) {
                this.ins = new UIManager();
            }
            return this.ins;
        };
        UIManager.prototype.changeScene = function (panel, effect) {
            if (effect === void 0) { effect = ''; }
            var con = game.LayerManager.getInstance().sceneLayer;
            con.addChild(panel);
            if (effect) {
                this.play(panel, effect);
            }
        };
        UIManager.prototype.changeView = function (panel, effect, dark) {
            if (effect === void 0) { effect = ''; }
            if (dark === void 0) { dark = true; }
            var con = game.LayerManager.getInstance().viewLayer;
            if (dark && !this.viewDarkSprite.parent) {
                con.addChild(this.viewDarkSprite);
            }
            con.addChild(panel);
            if (effect) {
                this.play(panel, effect);
            }
        };
        UIManager.prototype.changePanel = function (panel, effect, dark) {
            if (effect === void 0) { effect = ''; }
            if (dark === void 0) { dark = true; }
            var con = game.LayerManager.getInstance().panelLayer;
            if (dark && !this.darkSprite.parent) {
                con.addChild(this.darkSprite);
            }
            con.addChild(panel);
            if (effect) {
                this.play(panel, effect);
            }
        };
        UIManager.prototype.hidePanel = function (panel, effect) {
            if (effect === void 0) { effect = ''; }
            Tools.removeFromParent(this.darkSprite);
            if (effect) {
                console.log("@######");
                this.play(panel, effect);
            }
            else {
                Tools.removeFromParent(panel);
                panel = null;
            }
        };
        UIManager.prototype.play = function (nowView, effect, effectdata) {
            if (effectdata === void 0) { effectdata = null; }
            var className = egret.getDefinitionByName(effect);
            var pageSwitch = new className();
            if (pageSwitch) {
                pageSwitch.switching(nowView, Tools.removeFromParent, this, effectdata);
            }
        };
        return UIManager;
    }());
    game.UIManager = UIManager;
    __reflect(UIManager.prototype, "game.UIManager");
})(game || (game = {}));
