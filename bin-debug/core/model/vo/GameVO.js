var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameVO = (function () {
    function GameVO() {
        this.showTimes = '10秒';
        this.hasChance = false;
    }
    return GameVO;
}());
__reflect(GameVO.prototype, "GameVO");
