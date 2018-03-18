var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameCommand = (function (_super) {
    __extends(GameCommand, _super);
    function GameCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameCommand.prototype.register = function () {
        this.facade.registerCommand(GameNotify.REGISTER_SUCCESS, GameCommand);
        this.facade.registerCommand(GameNotify.REGISTER_FAIL, GameCommand);
        this.facade.registerCommand(GameNotify.LOGIN_SUCCESS, GameCommand);
        this.facade.registerCommand(GameNotify.LOGIN_FAIL, GameCommand);
    };
    GameCommand.prototype.execute = function (notification) {
        var data = notification.getBody();
        switch (notification.getName()) {
            case GameNotify.LOGIN_SUCCESS:
                this.onLoginSuccess(data);
                break;
            case GameNotify.LOGIN_FAIL:
                this.onLoginFail(data);
                break;
            case GameNotify.REGISTER_SUCCESS:
                this.onRegisterSucc(data);
                break;
            case GameNotify.REGISTER_FAIL:
                this.onRegisterFail(data);
                break;
        }
    };
    GameCommand.prototype.onLoginFail = function (data) {
        var code = data.returnCode;
        if (code == 10009) {
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_RESULT2);
        }
        else {
            alert('账号密码不正确');
        }
    };
    GameCommand.prototype.onLoginSuccess = function (data) {
        egret.log("LOGIN_SUCCESS");
        if (data.data) {
            var cpCode = data.data;
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_RESULT1, cpCode);
        }
        else {
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_RIGISTER);
        }
    };
    GameCommand.prototype.onRegisterSucc = function (data) {
        egret.log("register onRegisterSucc");
        if (data.data) {
            var cpCode = data.data;
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_RESULT1, cpCode);
        }
        else {
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_RESULT2);
        }
    };
    GameCommand.prototype.onRegisterFail = function (data) {
        egret.log('onRegisterFail');
    };
    GameCommand.NAME = "GameCommand";
    return GameCommand;
}(puremvc.SimpleCommand));
__reflect(GameCommand.prototype, "GameCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
