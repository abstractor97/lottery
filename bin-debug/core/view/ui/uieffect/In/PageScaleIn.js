var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var PageScaleIn = (function () {
        function PageScaleIn() {
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
        PageScaleIn.prototype.switching = function (toPage, callBack, thisObj, params) {
            if (toPage) {
                //目标坐标
                Tools.center(toPage);
                toPage.scaleX = toPage.scaleY = 0.5;
                // var ty = toPage.y + toPage.anchorOffsetY;
                // toPage.y = -toPage.height + toPage.anchorOffsetY;
                this.doAnim(toPage);
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
        PageScaleIn.prototype.doAnim = function (obj, callBack, thisObj) {
            Tools.stop(obj);
            var tw = egret.Tween.get(obj);
            if (game.PanelSwitch.easeIn) {
                tw.to({ scaleX: 1, scaleY: 1 }, game.PanelSwitch.durationIn, game.PanelSwitch.easeIn).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
            else {
                tw.to({ scaleX: 1, scaleY: 1 }, game.PanelSwitch.durationIn).call(function () { Tools.stop(obj); if (callBack) {
                    if (thisObj) {
                        callBack.call(thisObj, obj);
                    }
                    else {
                        callBack();
                    }
                } });
            }
        };
        return PageScaleIn;
    }());
    game.PageScaleIn = PageScaleIn;
    __reflect(PageScaleIn.prototype, "game.PageScaleIn", ["game.IPanelSwitch"]);
})(game || (game = {}));
