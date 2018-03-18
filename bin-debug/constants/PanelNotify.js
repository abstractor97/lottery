var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PanelNotify = (function () {
    function PanelNotify() {
    }
    PanelNotify.OPEN_NO_CHANCE = "NO_CHANCE";
    PanelNotify.CLOSE_NO_CHANCE = "CLOSE_NO_CHANCE";
    PanelNotify.OPEN_RULE = "OPEN_RULE";
    PanelNotify.CLOSE_RULE = "CLOSE_RULE";
    PanelNotify.OPEN_RANk = "OPEN_RANk";
    PanelNotify.CLOSE_RANk = "CLOSE_RANk";
    PanelNotify.OPEN_REGISTER = "OPEN_REGISTER";
    PanelNotify.CLOSE_REGISTER = "CLOSE_REGISTER";
    PanelNotify.OPEN_SHARE = "OPEN_SHARE";
    PanelNotify.CLOSE_SHARE = "CLOSE_SHARE";
    return PanelNotify;
}());
__reflect(PanelNotify.prototype, "PanelNotify");
