var Tools;
(function (Tools) {
    /**
     * 停止sp对象的所有动画
     *
     * @param sp 要停止所有动画的对象
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    function stop(sp) {
        egret.Tween.removeTweens(sp);
    }
    Tools.stop = stop;
    /**
     *从父级显示列表移除，如果父级存在
     * @param displayObject 要从父级显示列表移除的显示对象
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    function removeFromParent(displayObject) {
        if (displayObject && displayObject.parent)
            displayObject.parent.removeChild(displayObject);
    }
    Tools.removeFromParent = removeFromParent;
    /**
     *将obj的锚点设置在中心点
     * @param obj 要设置的对象
     *
     * @version 0.0.1
     * @platform egret3.0.2
     */
    function center(obj) {
        obj.x -= obj.anchorOffsetX;
        obj.y -= obj.anchorOffsetY;
        obj.anchorOffsetX = obj.width >> 1;
        obj.anchorOffsetY = obj.height >> 1;
        obj.x += obj.anchorOffsetX;
        obj.y += obj.anchorOffsetY;
    }
    Tools.center = center;
    /**
         * 创建设置了mcName名称资源的动画对象
         * @param mcName
         * @param type mc动画图片资源类型 png或者 jpg
         * @return mcName对应的MovieClip
         *
         * @version 0.0.1
         * @platform egret3.0.2
         */
    function createMovieClip(mcName, type) {
        if (type === void 0) { type = 'png'; }
        var resJs = RES.getRes(mcName + "_json");
        var resPng = RES.getRes(mcName + "_" + type);
        var mcFactory = new egret.MovieClipDataFactory(resJs, resPng);
        var movieclipData = mcFactory.generateMovieClipData(mcName);
        var mc1 = new egret.MovieClip(movieclipData);
        return mc1;
    }
    Tools.createMovieClip = createMovieClip;
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
       * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     * @param name 纹理的名称
     * @return 纹理是name的对应资源的bitmap对象
     *
     * @version 0.0.1
     * @platform egret3.0.2
       */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    Tools.createBitmapByName = createBitmapByName;
    /**
       * 获取bfont对应的bitmaptext
     *
     * @param bfont 资源名
     * @return bfont对应的BitmapText
     *
     * @version 0.0.1
     * @platform egret3.0.2
       */
    function createBitmapText(bfont) {
        var font = RES.getRes(bfont);
        var btxt = new egret.BitmapText;
        btxt.font = font;
        return btxt;
    }
    Tools.createBitmapText = createBitmapText;
    function urlEncode(param, key, encode) {
        if (param == null)
            return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
        }
        else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += this.urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    }
    Tools.urlEncode = urlEncode;
    /**
     * @param name id名称
     */
    function getElementById(name) {
        return document.getElementById(name);
    }
    Tools.getElementById = getElementById;
    var gameDiv;
    var myImg;
    var qrcode;
    function addQRcode() {
        qrcode = document.createElement('img');
        qrcode.className = 'qrcode';
        qrcode.name = "qrcode";
        qrcode.src = 'resource/images/code.png';
        qrcode.style.cssText = "width: " + 27.3 + "%;height: " + 16.89 + "%;position: absolute;left:22%;top: 58.14%;";
        //document.body.appendChild(qrcode);
        gameDiv = document.getElementById("gameDiv");
        gameDiv.appendChild(qrcode);
        // var myImgWidth = 640 * 0.7;
        // var myImgHeight = 1036 * 0.7;
        // var myImgPercent_width = (myImgWidth / 640) * 100;
        // var myImgPercent_height = (myImgHeight / 1036) * 100;
        // console.log("james myImgPercent_x: " + myImgPercent_width + " myImgPercent_y: " + myImgPercent_height);
        // gameDiv = document.getElementById("gameDiv");
        // myImg = document.createElement("img");
        // myImg.id = "img_code";
        // myImg.alt = "qrcode";
        // myImg.src = "resource/images/cp1.png";
        // myImg.style.width = "50%";
        // myImg.style.height = "50%";
        // myImg.style.position = "absolute";
        // myImg.style.left = "34.69%";
        // myImg.style.top = "55.6%";
        // gameDiv.appendChild(myImg);
    }
    Tools.addQRcode = addQRcode;
    function removeQRcode() {
        if (qrcode) {
            qrcode.parentNode.removeChild(qrcode);
        }
    }
    Tools.removeQRcode = removeQRcode;
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    Tools.setCookie = setCookie;
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) != -1)
                return c.substring(name.length, c.length);
        }
        return null;
    }
    Tools.getCookie = getCookie;
    /**
     * 所有请求都需要加sign签名，sign的加密规则（所有请求入参+私钥进行MD5加密，多个入参以“|”分隔，如“MD5(arg1|arg2|私钥)”）
      私钥：SHUHEKEJI
    
     */
    function madeMd5(str) {
        return new md5().hex_md5(str);
    }
    Tools.madeMd5 = madeMd5;
})(Tools || (Tools = {}));
