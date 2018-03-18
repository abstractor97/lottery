module game {
	/**
     * 页面从右方出去 切换效果类
	 * 
	 * @version 0.0.1
	 * @platform egret3.0.2
     */
	export class PageRightOut implements IPanelSwitch {
		public constructor() {
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
		public switching( fromPage?: egret.DisplayObject, callBack?: Function, thisObj?, params?: Object): void {
			if (fromPage) {
				var tx = egret.MainContext.instance.stage.stageWidth + fromPage.anchorOffsetX;

				this.doAnim(fromPage, tx, callBack, thisObj);
			}
		}

		/**
		 * 执行动画
		 * @private
		 *
		 * @param obj
		 * @param tx
		 * @param callBack?
		 * @param thisObj?
		 * 
		 * @version 0.0.1
		 * @platform egret3.0.2
		 */
		private doAnim(obj, tx, callBack?, thisObj?): void {
			Tools.stop(obj);
			var tw = egret.Tween.get(obj);
			if(game.PanelSwitch.easeOut) {
				tw.to({ x: tx }, game.PanelSwitch.durationOut,game.PanelSwitch.easeOut).call(function () { Tools.stop(obj); if(callBack){if(thisObj){callBack.call(thisObj, obj);}else{callBack()}} });
			} else {
				tw.to({ x: tx }, game.PanelSwitch.durationOut).call(function () { Tools.stop(obj); if(callBack){if(thisObj){callBack.call(thisObj, obj);}else{callBack()}} });
			}
		}
	}
}