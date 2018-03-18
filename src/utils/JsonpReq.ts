
module JsonpReq {
    var _regID: number = 0;
    var completeCall: any = {};
    export function process(url: string, callback: Function, thisObj: any) {
        completeCall["call_" + this._regID] = callback.bind(thisObj);
        startLoader(url, this._regID++);
    }

    function startLoader(url: string, id: number) {
        let script = document.createElement('script');
        script.src = url + "&callback=JsonpReq.completeCall.call_" + id + "";
        document.body.appendChild(script);
    }
}