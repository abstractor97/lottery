var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 页面切换 淡入效果类
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    var PageAlphaIn = (function () {
        function PageAlphaIn() {
        }
        /**
         *页面切换
         * @param toPage 要切换过去的类
         * @param fromPage? 当前类
         * @param callBack? 切换完成回调
         * @param thisObj? 回调this
         * @param params? 切换效果可选参数
         *
         * @version 0.0.1
         * @platform egret3.0.2
         */
        PageAlphaIn.prototype.switching = function (toPage, callBack, thisObj, params) {
            if (toPage) {
                //目标坐标
                var a = 1;
                toPage.alpha = 0;
                this.doAnim(toPage, a);
            }
        };
        /**
         * 执行动画
         * @private
         *
         * @param obj
         * @param a
         * @param callBack?
         * @param thisObj?
         */
        PageAlphaIn.prototype.doAnim = function (obj, a, callBack, thisObj) {
            Tools.stop(obj);
            var tw = egret.Tween.get(obj);
            if (game.PanelSwitch.easeIn) {
                tw.to({ alpha: a }, game.PanelSwitch.durationIn, game.PanelSwitch.easeIn).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
            else {
                tw.to({ alpha: a }, game.PanelSwitch.durationIn).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
        };
        return PageAlphaIn;
    }());
    game.PageAlphaIn = PageAlphaIn;
    __reflect(PageAlphaIn.prototype, "game.PageAlphaIn", ["game.IPanelSwitch"]);
})(game || (game = {}));
