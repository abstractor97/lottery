var JsonpReq;
(function (JsonpReq) {
    var _regID = 0;
    var completeCall = {};
    function process(url, callback, thisObj) {
        completeCall["call_" + this._regID] = callback.bind(thisObj);
        startLoader(url, this._regID++);
    }
    JsonpReq.process = process;
    function startLoader(url, id) {
        var script = document.createElement('script');
        script.src = url + "&callback=JsonpReq.completeCall.call_" + id + "";
        document.body.appendChild(script);
    }
})(JsonpReq || (JsonpReq = {}));
