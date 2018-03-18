/**
  * 通过excel名称获得excel数据proxy
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var P;
(function (P) {
    //=========================excel数据=============================
    /**
     * 这个是一个读取excel数据的例子
     */
    // export function getTemplateDataProxy(): TemplateProxy {
    //     return <TemplateProxy><any>game.AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
    // } 
    //=========================游戏其他数据数据=============================
    /**
     * 读取App玩家信息
     */
    function getGameVOProxy() {
        return game.AppFacade.getInstance().retrieveProxy(GameVOProxy.NAME);
    }
    P.getGameVOProxy = getGameVOProxy;
})(P || (P = {}));
