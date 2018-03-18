
class Http {

    private static _instance: Http;

    public constructor() {

    }

    public static getInstance(): Http {
        if (!this._instance) {
            this._instance = new Http();
            return this._instance;
        } else {
            return this._instance;
        }
    }
    /**
     * @type 请求类型
     * @vari 请求参数
     * @url  请求地址
     */
    public httpReq(type: string, url: string, vari: string = "", contentType: string = "application/x-www-form-urlencoded", responseType: string = egret.HttpResponseType.TEXT): Promise<{}> {
        return new Promise(function (resolve, reject) {
            var httpVarsStr = vari;
            var request = new egret.HttpRequest();
            request.responseType = responseType;
            request.open(url, type);
            if (type == egret.HttpMethod.POST) {
                request.setRequestHeader("Content-Type", contentType);
            }
            request.send(httpVarsStr);//发送post参数
            request.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
                var request = <egret.HttpRequest>e.currentTarget;
                var response = JSON.parse(request.response);
                resolve(response);
            }, this);

        });


    }
}