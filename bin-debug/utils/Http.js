var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Http = (function () {
    function Http() {
    }
    Http.getInstance = function () {
        if (!this._instance) {
            this._instance = new Http();
            return this._instance;
        }
        else {
            return this._instance;
        }
    };
    /**
     * @type 请求类型
     * @vari 请求参数
     * @url  请求地址
     */
    Http.prototype.httpReq = function (type, url, vari, contentType, responseType) {
        if (vari === void 0) { vari = ""; }
        if (contentType === void 0) { contentType = "application/x-www-form-urlencoded"; }
        if (responseType === void 0) { responseType = egret.HttpResponseType.TEXT; }
        return new Promise(function (resolve, reject) {
            var httpVarsStr = vari;
            var request = new egret.HttpRequest();
            request.responseType = responseType;
            request.open(url, type);
            if (type == egret.HttpMethod.POST) {
                request.setRequestHeader("Content-Type", contentType);
            }
            request.send(httpVarsStr); //发送post参数
            request.addEventListener(egret.Event.COMPLETE, function (e) {
                var request = e.currentTarget;
                var response = JSON.parse(request.response);
                resolve(response);
            }, this);
        });
    };
    return Http;
}());
__reflect(Http.prototype, "Http");
