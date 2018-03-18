module game {
	/**
     * 页面从下方出去 切换效果类
	 * 
	 * @version 0.0.1
	 * @platform egret3.0.2
     */
	export class PageBottomOut implements IPanelSwitch {
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
				var ty = egret.MainContext.instance.stage.stageHeight + fromPage.anchorOffsetY;

				this.doAnim(fromPage, ty, callBack, thisObj);
			}
		}
		/**
		 * 执行动画
		 * @private
		 *
		 * @param obj
		 * @param ty
		 * @param callBack?
		 * @param thisObj?
		 * 
		 * @version 0.0.1
		 * @platform egret3.0.2
		 */
		private doAnim(obj, ty, callBack?, thisObj?): void {
			Tools.stop(obj);
			var tw = egret.Tween.get(obj);
			if (game.PanelSwitch.easeOut) {
				tw.to({ y: ty }, game.PanelSwitch.durationOut, game.PanelSwitch.easeOut).call(function () { Tools.stop(obj); if (callBack) { if (thisObj) { callBack.call(thisObj, obj); } else { callBack() } } });
			} else {
				tw.to({ y: ty }, game.PanelSwitch.durationOut).call(function () { Tools.stop(obj); if (callBack) { if (thisObj) { callBack.call(thisObj, obj); } else { callBack() } } });
			}
		}
	}
}