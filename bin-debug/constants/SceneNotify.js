var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
  * 场景消息
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var SceneNotify = (function () {
    function SceneNotify() {
    }
    //开始启动游戏逻辑
    SceneNotify.BEGIN = 'begin';
    //开始建立链接
    SceneNotify.CONNECT_GAME = 'connect_game';
    //打开主场景
    SceneNotify.OPEN_HOME = "SceneNotify_OPEN_HOME";
    //关闭主场景
    SceneNotify.CLOSE_HOME = "SceneNotify_CLOSE_HOME";
    //打开游戏场景
    SceneNotify.OPEN_GAME = "OPEN_GAME";
    SceneNotify.CLOSE_GAME = 'CLOSE_GAME';
    //关闭游戏场景
    SceneNotify.OPEN_INDEX = 'OPEN_INDEX';
    SceneNotify.CLOSE_INDEX = 'CLOSE_INDEX';
    SceneNotify.OPEN_ACHEIVE = 'OPEN_ACHEIVE';
    SceneNotify.CLOSE_ACHEIVE = 'CLOSE_ACHEIVE';
    SceneNotify.OPEN_RIGISTER = 'OPEN_RIGISTER';
    SceneNotify.CLOSE_RIGISTER = 'CLOSE_RIGISTER';
    SceneNotify.OPEN_RESULT1 = 'OPEN_RESULT1';
    SceneNotify.CLOSE_RESULT1 = 'CLOSE_RESULT1';
    SceneNotify.CLOSE_RESULT2 = 'CLOSE_RESULT2';
    SceneNotify.OPEN_RESULT2 = 'OPEN_RESULT2';
    SceneNotify.OPEN_PHOTOTIPS = 'OPEN_PHOTOTIPS';
    SceneNotify.CLOSE_PHOTOTIPS = 'CLOSE_PHOTOTIPS';
    return SceneNotify;
}());
__reflect(SceneNotify.prototype, "SceneNotify");
