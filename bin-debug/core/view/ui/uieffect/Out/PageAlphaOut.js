var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 页面切换 淡出效果类
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    var PageAlphaOut = (function () {
        function PageAlphaOut() {
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
        PageAlphaOut.prototype.switching = function (fromPage, callBack, thisObj, params) {
            if (fromPage) {
                var a = 0;
                this.doAnim(fromPage, a, callBack, thisObj);
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
         *
         * @version 0.0.1
         * @platform egret3.0.2
         */
        PageAlphaOut.prototype.doAnim = function (obj, a, callBack, thisObj) {
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
        return PageAlphaOut;
    }());
    game.PageAlphaOut = PageAlphaOut;
    __reflect(PageAlphaOut.prototype, "game.PageAlphaOut", ["game.IPanelSwitch"]);
})(game || (game = {}));
