var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 按钮效果触发类：当在舞台上被点击的对象的名称是btn时，会触发此缩放效果(会自动将锚点居中哦)
     *
     * @example
     * 如下设置即可，任意显示对象都可以
     * <pre>
     *   var btn:egret.Shape = new egret.Shape();
     *   btn.name = wy.StageBtnUtils.TYPE_BUTTON;
     * </pre>
     *
     * @version 0.0.4
     * @platform egret3.0.2
     */
    var StageBtnUtils = (function () {
        function StageBtnUtils() {
        }
        Object.defineProperty(StageBtnUtils, "showTouchEffects", {
            get: function () {
                return this._showTouchEffects;
            },
            set: function (value) {
                this._showTouchEffects = value;
                if (value) {
                    GameConfig.curStage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                }
                else {
                    GameConfig.curStage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StageBtnUtils, "showBtnEffects", {
            get: function () {
                return this._showBtnEffects;
            },
            set: function (value) {
                this._showBtnEffects = value;
                if (value) {
                    GameConfig.curStage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                    GameConfig.curStage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRelease, this);
                    GameConfig.curStage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                }
                else {
                    GameConfig.curStage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
                    GameConfig.curStage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRelease, this);
                    GameConfig.curStage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         */
        StageBtnUtils.init = function () {
            this.showBtnEffects = true;
            this.showTouchEffects = true;
        };
        StageBtnUtils.onTouchTap = function (e) {
            game.TouchEffects.do(e.stageX, e.stageY);
        };
        StageBtnUtils.onTouchBegin = function (e) {
            if (e.target.name == 'btn') {
                Tools.center(e.target);
                e.target.scaleX = e.target.scaleY = 0.95;
            }
        };
        StageBtnUtils.onTouchRelease = function (e) {
            if (e.target.name == 'btn') {
                e.target.scaleX = e.target.scaleY = 1;
            }
            if (this._showTouchEffects)
                game.TouchEffects.do(e.stageX, e.stageY);
        };
        StageBtnUtils.onTouchEnd = function (e) {
            if (e.target.name == 'btn') {
                e.target.scaleX = e.target.scaleY = 1;
            }
        };
        StageBtnUtils.TYPE_BUTTON = 'btn';
        StageBtnUtils._showTouchEffects = true;
        StageBtnUtils._showBtnEffects = true;
        return StageBtnUtils;
    }());
    game.StageBtnUtils = StageBtnUtils;
    __reflect(StageBtnUtils.prototype, "game.StageBtnUtils");
})(game || (game = {}));
