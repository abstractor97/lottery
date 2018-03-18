var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameNotify = (function () {
    function GameNotify() {
    }
    GameNotify.SWITCH_SCENE = "SWITCH_SCENE";
    GameNotify.ON_REGISTER_USER = "ON_REGISTER_USER";
    GameNotify.ON_FINDCP = "ON_FINDCP";
    GameNotify.UPDATE_QUESTION = "UPDATE_QUESTION";
    GameNotify.LOGIN_SUCCESS = "LOGIN_SUCCESS";
    GameNotify.LOGIN_FAIL = "LOGIN_FAIL";
    GameNotify.REGISTER_SUCCESS = "REGISTER_SUCCESS";
    GameNotify.REGISTER_FAIL = "REGISTER_FAIL";
    return GameNotify;
}());
__reflect(GameNotify.prototype, "GameNotify");
