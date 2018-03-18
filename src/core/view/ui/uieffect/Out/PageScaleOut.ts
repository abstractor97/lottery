module game {
	export class PageScaleOut implements IPanelSwitch {
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
		public switching(fromPage?: egret.DisplayObject, callBack?: Function, thisObj?, params?: Object): void {
			if (fromPage) {
				// var ty = GameInterface.stage.stageHeight + fromPage.anchorOffsetY;

				this.doAnim(fromPage, callBack, thisObj);
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
		private doAnim(obj,  callBack?, thisObj?): void {
			Tools.stop(obj);
			var tw = egret.Tween.get(obj);
			if(game.PanelSwitch.easeOut) {
				tw.to({ scaleX: 0, scaleY: 0 }, game.PanelSwitch.durationOut,game.PanelSwitch.easeOut).call(function () { Tools.stop(obj); if(callBack){if(thisObj){callBack.call(thisObj, obj);}else{callBack()}} });
			} else {
				tw.to({ scaleX: 0, scaleY: 0 }, game.PanelSwitch.durationOut).call(function () { Tools.stop(obj); if(callBack){if(thisObj){callBack.call(thisObj, obj);}else{callBack()}} });
			}
		}
	}
}