var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 页面从下方出去 切换效果类
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    var PageBottomOut = (function () {
        function PageBottomOut() {
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
        PageBottomOut.prototype.switching = function (fromPage, callBack, thisObj, params) {
            if (fromPage) {
                var ty = egret.MainContext.instance.stage.stageHeight + fromPage.anchorOffsetY;
                this.doAnim(fromPage, ty, callBack, thisObj);
            }
        };
        /**
         * 执行动画
         * @private
         *
         * @param obj
         * @param ty
         * @param callBack?
         * @param thisObj?
         *
         * @version 0.0.1
         * @platform egret3.0.2
         */
        PageBottomOut.prototype.doAnim = function (obj, ty, callBack, thisObj) {
            Tools.stop(obj);
            var tw = egret.Tween.get(obj);
            if (game.PanelSwitch.easeOut) {
                tw.to({ y: ty }, game.PanelSwitch.durationOut, game.PanelSwitch.easeOut).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
            else {
                tw.to({ y: ty }, game.PanelSwitch.durationOut).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
        };
        return PageBottomOut;
    }());
    game.PageBottomOut = PageBottomOut;
    __reflect(PageBottomOut.prototype, "game.PageBottomOut", ["game.IPanelSwitch"]);
})(game || (game = {}));
