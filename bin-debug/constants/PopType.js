var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PopType = (function () {
    function PopType() {
    }
    /**
         * 左边飞入
         * @version 0.0.1
         * @platform egret3.0.2
         */
    PopType.LEFTIN = "game.PageLeftIn";
    /**
     * 右边飞入
     * @version 0.0.1
       * @platform egret3.0.2
     */
    PopType.RIGHTIN = "game.PageRightIn";
    /**
     * 从上飞入
     * @version 0.0.1
       * @platform egret3.0.2
     **/
    PopType.TOPIN = "game.PageTopIn";
    /**
     * 从下飞入
     * @version 0.0.1
       * @platform egret3.0.2
     **/
    PopType.BOTTOMIN = "game.PageBottomIn";
    /**
     * 淡入
     * @version 0.0.1
       * @platform egret3.0.2
     */
    PopType.ALPHAIN = "game.PageAlphaIn";
    /** 弹出来 **/
    PopType.EJECTIN = "game.PageScaleIn";
    // /** 砸下去 **/
    // public static DOWNIN = "downin";
    /**
     * 左边飞出
     * @version 0.0.1
       * @platform egret3.0.2
     */
    PopType.LEFTOUT = "game.PageLeftOut";
    /**
     * 右边飞出
     * @version 0.0.1
       * @platform egret3.0.2
     */
    PopType.RIGHTOUT = "game.PageRightOut";
    /**
     * 从上飞出
     * @version 0.0.1
       * @platform egret3.0.2
     */
    PopType.TOPOUT = "game.PageTopOut";
    /**
     * 从下飞出
     * @version 0.0.1
       * @platform egret3.0.2
     */
    PopType.BOTTOMOUT = "game.PageBottomOut";
    /**
     * 淡出
     * @version 0.0.1
       * @platform egret3.0.2
     */
    PopType.ALPHAOUT = "game.PageAlphaOut";
    /** 缩回去 **/
    PopType.EJECTOUT = "game.PageScaleOut";
    return PopType;
}());
__reflect(PopType.prototype, "PopType");
