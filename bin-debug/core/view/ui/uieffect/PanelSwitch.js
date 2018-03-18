var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     *页面切换 默认参数配置类
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    var PanelSwitch = (function () {
        function PanelSwitch() {
        }
        /**
         * 默认切入缓动持续时间
         * @version 0.0.1
         * @platform egret3.0.2
         */
        PanelSwitch.durationIn = 300;
        /**
         * 默认切入缓动方程
         * @version 0.0.1
         * @platform egret3.0.2
         */
        PanelSwitch.easeIn = null;
        /**
         * 默认切出缓动持续时间
         * @version 0.0.1
         * @platform egret3.0.2
         */
        PanelSwitch.durationOut = 300;
        /**
         * 默认切出缓动方程
         * @version 0.0.1
         * @platform egret3.0.2
         */
        PanelSwitch.easeOut = null;
        return PanelSwitch;
    }());
    game.PanelSwitch = PanelSwitch;
    __reflect(PanelSwitch.prototype, "game.PanelSwitch");
})(game || (game = {}));
