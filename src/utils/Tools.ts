
module Tools {
    /** 
	 * 停止sp对象的所有动画 
	 * 
	 * @param sp 要停止所有动画的对象
	 * 
	 * @version 0.0.1
	 * @platform egret3.0.2
	 */
	export function stop(sp: any) {
		egret.Tween.removeTweens(sp);
	}
    /**
     *从父级显示列表移除，如果父级存在
     * @param displayObject 要从父级显示列表移除的显示对象
     * 
     * @version 0.0.1
     * @platform egret3.0.2
     */
	export function removeFromParent(displayObject: egret.DisplayObject) {
		if (displayObject && displayObject.parent) displayObject.parent.removeChild(displayObject);
	}

    /**
	 *将obj的锚点设置在中心点
	 * @param obj 要设置的对象
	 * 
	 * @version 0.0.1
	 * @platform egret3.0.2
	 */
	export function center(obj: egret.DisplayObject): void {
		obj.x -= obj.anchorOffsetX;
		obj.y -= obj.anchorOffsetY;
		obj.anchorOffsetX = obj.width >> 1;
		obj.anchorOffsetY = obj.height >> 1;
		obj.x += obj.anchorOffsetX;
		obj.y += obj.anchorOffsetY;
	}

    /**
		 * 创建设置了mcName名称资源的动画对象
		 * @param mcName
		 * @param type mc动画图片资源类型 png或者 jpg
		 * @return mcName对应的MovieClip
		 * 
		 * @version 0.0.1
		 * @platform egret3.0.2
		 */
	export function createMovieClip(mcName: string, type: string = 'png'): egret.MovieClip {
		var resJs = RES.getRes(mcName + "_json");
		var resPng = RES.getRes(mcName + "_" + type);
		var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(resJs, resPng);
		var movieclipData = mcFactory.generateMovieClipData(mcName);
		var mc1: egret.MovieClip = new egret.MovieClip(movieclipData);
		return mc1;
	}

	/**
	 * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
	   * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
	 * @param name 纹理的名称
	 * @return 纹理是name的对应资源的bitmap对象
	 *
	 * @version 0.0.1
	 * @platform egret3.0.2
	   */
	export function createBitmapByName(name: string): egret.Bitmap {
		var result: egret.Bitmap = new egret.Bitmap();
		var texture: egret.Texture = RES.getRes(name);
		result.texture = texture;
		return result;
	}

	/**
	   * 获取bfont对应的bitmaptext
	 *
	 * @param bfont 资源名
	 * @return bfont对应的BitmapText
	 * 
	 * @version 0.0.1
	 * @platform egret3.0.2
	   */
	export function createBitmapText(bfont: string): egret.BitmapText {
		var font = RES.getRes(bfont);
		var btxt = new egret.BitmapText;
		btxt.font = font;
		return btxt;
	}

	export function urlEncode(param, key, encode): string {
		if (param == null) return '';
		var paramStr: string = '';
		var t = typeof (param);
		if (t == 'string' || t == 'number' || t == 'boolean') {
			paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
		} else {
			for (var i in param) {
				var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
				paramStr += this.urlEncode(param[i], k, encode);
			}
		}
		return paramStr;
	}

	export async function sleep(time) {
		return new Promise(resolve => {
			egret.setTimeout(() => {
				resolve();
			}, this, time);
		});
	}

	export function madeMd5(str: string) {
		return new md5().hex_md5(str);
	}
}