var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 自顶入 切换效果类
     * 目标页面从上方坠下，当前页面从下方移出
     *
     * 可以传可选参数有
     * ease 缓动方程
     * duration 动画持续时间
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    var PageTopIn = (function () {
        function PageTopIn() {
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
        PageTopIn.prototype.switching = function (toPage, callBack, thisObj, params) {
            if (toPage) {
                //目标坐标
                var ty = toPage.y + toPage.anchorOffsetY;
                toPage.y = -toPage.height + toPage.anchorOffsetY;
                this.doAnim(toPage, ty);
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
        PageTopIn.prototype.doAnim = function (obj, ty, callBack, thisObj) {
            Tools.stop(obj);
            var tw = egret.Tween.get(obj);
            if (game.PanelSwitch.easeIn) {
                tw.to({ y: ty }, game.PanelSwitch.durationIn, game.PanelSwitch.easeIn).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
            else {
                tw.to({ y: ty }, game.PanelSwitch.durationIn).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
        };
        return PageTopIn;
    }());
    game.PageTopIn = PageTopIn;
    __reflect(PageTopIn.prototype, "game.PageTopIn", ["game.IPanelSwitch"]);
})(game || (game = {}));
