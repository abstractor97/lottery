module game {
    /**
     * 页面从下方进入效果类
	 * 
	 * @version 0.0.1
	 * @platform egret3.0.2
     */	
	export class PageBottomIn implements IPanelSwitch {
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
		public switching(toPage: egret.DisplayObject, callBack?: Function, thisObj?, params?: Object): void {
			if (toPage) {
				//目标坐标
				var ty = toPage.y + toPage.anchorOffsetY;

				toPage.y = egret.MainContext.instance.stage.stageHeight + toPage.anchorOffsetY;

				this.doAnim(toPage, ty);
			}
		}

		/**
		 * 执行动画
		 * @private
		 * 
		 * @param obj
		 * @param a
		 * @param callBack?
		 * @param thisObj?
		 */
		private doAnim(obj, ty, callBack?, thisObj?): void {
			Tools.stop(obj);
			var tw = egret.Tween.get(obj);
			if (game.PanelSwitch.easeIn) {
				tw.to({ y: ty }, game.PanelSwitch.durationIn, game.PanelSwitch.easeIn).call(function () { Tools.stop(obj); if (callBack) { if (thisObj) { callBack.call(thisObj, obj); } else { callBack() } } });
			} else {
				tw.to({ y: ty }, game.PanelSwitch.durationIn).call(function () { Tools.stop(obj); if (callBack) { if (thisObj) { callBack.call(thisObj, obj); } else { callBack() } } });
			}
		}
	}
}