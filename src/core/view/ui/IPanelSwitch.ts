
module game {
    /**
     * 面板切换效果接口类
	 * 
	 * @version 0.0.1
	 * @platform egret3.0.2
     */
	export interface IPanelSwitch {
		/**
		 *切换面板
		 * @param panel 要切换的页面
		 * @param callBack? 切换完成回调
		 * @param thisObj? 回调this
		 * @param params? 页面切换可选参数
		 *
		 * @version 0.0.1
	 	 * @platform egret3.0.2
		 */
		switching(panel: egret.DisplayObject, callBack?: Function, thisObj?, params?: Object): void
	}
}