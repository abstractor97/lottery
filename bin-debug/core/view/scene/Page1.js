var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Page1 = (function (_super) {
    __extends(Page1, _super);
    function Page1() {
        var _this = _super.call(this) || this;
        _this.count = 0;
        _this.config = {
            lineHeigth: 42,
            lineNum: 0,
            displayHeight: 779,
            displayNum: 20
        };
        _this.istheFirst = true;
        _this.buttonArray = [];
        _this.headArray = [];
        _this.listArray = [];
        _this.once(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "Page1Skin";
        return _this;
    }
    Page1.prototype.onComplete = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.buttonArray.push(this.select_kaijaing);
                        this.buttonArray.push(this.select_jibengzhoushi);
                        this.buttonArray.push(this.select_hezhizhoushi);
                        this.buttonArray.push(this.select_lengre);
                        this.headArray.push(this.kajiang_head);
                        this.headArray.push(this.jibengzhoushi_head);
                        this.headArray.push(this.hezhizhoushi_head);
                        this.headArray.push(this.lengre_head);
                        this.listArray.push(this.kaijiangList);
                        this.listArray.push(this.jjibengList);
                        this.listArray.push(this.hezhiList);
                        this.listArray.push(this.lengreList);
                        this.initButton();
                        return [4 /*yield*/, this.createDemoData()];
                    case 1:
                        arr = _a.sent();
                        self = this;
                        self.updataKaiJiangList(arr);
                        //{ "period": "1", "winnernumber": "233", "total": "999", "daxiao": "小", "danshuang": "双" }
                        //GlobalEvent.LListener.getInstance().addEventListener("getdata", this.initPage, this);
                        this.myscroller.addEventListener(eui.UIEvent.CHANGE_END, this.onChangeEnd, this);
                        this.myscroller.addEventListener(eui.UIEvent.CHANGE_START, this.onChangeStart, this);
                        this.myscroller.addEventListener(eui.UIEvent.CHANGE, this.onChange, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    Page1.prototype.onChangeStart = function (e) {
        console.log("滚动开始！");
    };
    Page1.prototype.updateList = function (scrollDis, listHeigth) {
        console.log('scrolldis', scrollDis);
        if (scrollDis <= this.config.lineHeigth) {
            this.myscroller.viewport.scrollV = 0;
            this.kaijiangList.getChildAt(0).visible = true;
            this.mygroup.validateNow();
            return;
        }
        if (scrollDis > this.config.lineHeigth) {
            var displayStart = Math.ceil(scrollDis / this.config.lineHeigth) - 1;
            var displayEnd = displayStart + 20;
            console.log(displayStart, displayEnd);
        }
        for (var i = 0; i < this.config.lineNum; i++) {
            if (i >= displayStart && i <= displayEnd) {
                this.kaijiangList.getChildAt(i).visible = true;
            }
            else {
                this.kaijiangList.getChildAt(i).visible = false;
            }
        }
    };
    Page1.prototype.onChange = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var dis;
            return __generator(this, function (_a) {
                dis = this.myscroller.viewport.scrollV;
                this.updateList(dis, this.config.lineNum * this.config.lineHeigth);
                return [2 /*return*/];
            });
        });
    };
    Page1.prototype.onChangeEnd = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, i, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!((this.myscroller.viewport.scrollV + this.myscroller.height) >= this.myscroller.viewport.contentHeight)) return [3 /*break*/, 2];
                        console.log("滚动到底部了");
                        this.waitpanel = new egret.Bitmap(RES.getRes('loadingCircle_png'));
                        this.waitpanel.x = (GameConfig.curWidth - this.waitpanel.width) / 2;
                        this.waitpanel.y = GameConfig.curHeight - this.waitpanel.height - 30;
                        this.mygroup.addChild(this.waitpanel);
                        this.waitpanel.anchorOffsetX = this.waitpanel.width / 2;
                        this.waitpanel.anchorOffsetY = this.waitpanel.height / 2;
                        EffectUtils.rotationEffect(this.waitpanel, 1000);
                        return [4 /*yield*/, this.createDemoData()];
                    case 1:
                        arr = _a.sent();
                        for (i = 0; i < arr.length; i++) {
                            obj = arr[i];
                            this.kaijiangArrayCollection.addItem(obj);
                        }
                        // this.kaijiangList.cacheAsBitmap = true;
                        if (this.waitpanel) {
                            this.mygroup.removeChild(this.waitpanel);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Page1.prototype.createDemoData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var arr = [];
            var length;
            if (_this.count == 0) {
                length = 40;
            }
            else {
                length = _this.count + 40;
            }
            for (var i = _this.count; i < length; i++) {
                var obj = {};
                obj['period'] = i.toString();
                obj['winnernumber'] = "123";
                obj['total'] = '999';
                obj['daxiao'] = "小";
                obj['danshuang'] = "双";
                arr.push(obj);
                _this.count++;
                _this.config.lineNum++;
            }
            resolve(arr);
        });
    };
    Page1.prototype.onTimer = function (e) {
        this.upDatePage();
    };
    Page1.prototype.analysisData = function () {
        // console.log("10秒更新！");
        // if (GlobalData.GameVO.theWinnerNumber.length > 0) {
        //     this.label_kaijiang.text = GlobalData.GameVO.nowPeriod.toString() + "期开奖: " + GlobalData.GameVO.theWinnerNumber[0].toString() + " " +
        //         GlobalData.GameVO.theWinnerNumber[1].toString() + " " + GlobalData.GameVO.theWinnerNumber[2].toString();
        // } else {
        //     this.label_kaijiang.text = GlobalData.GameVO.nowPeriod.toString() + "期开奖: 正在开奖中..."
        // }
        // this.label_xianqi.text = "距" + GlobalData.GameVO.nextPeriod + "期截止";
        // this.time_left.text = GlobalData.GameVO.nowTime;
        // var per = GlobalData.GameVO.timeLeft / 600;
        // var rect = new egret.Rectangle(0, 0, per * this.timebar.width, this.timebar.height);
        // this.timebar.mask = rect;
    };
    Page1.prototype.updataSaizi = function (num1, num2, num3) {
        if (this.thewinnerNum1 == num1 && this.thewinnerNum2 == num2, this.thewinnerNum3 == num3) {
            return;
        }
        this.thewinnerNum1 = num1;
        this.thewinnerNum2 = num2;
        this.thewinnerNum3 = num3;
        var res1 = RES.getRes("saizi_" + num1.toString() + "_png");
        var res2 = RES.getRes("saizi_" + num2.toString() + "_png");
        var res3 = RES.getRes("saizi_" + num3.toString() + "_png");
        this.saizi_1.source = res1;
        this.saizi_2.source = res2;
        this.saizi_3.source = res3;
    };
    //远程数据更新时： {data.period},{data.winnernumber},{data.total},{data.daxiao},{data.danshuang}
    Page1.prototype.initPage = function () {
        // this.analysisData();
        // if (this.thewinnerNum1 == GlobalData.GameVO.theWinnerNumber[0] && this.thewinnerNum2 == GlobalData.GameVO.theWinnerNumber[1]
        //     && this.thewinnerNum3 == GlobalData.GameVO.theWinnerNumber[2]) {
        // } else {
        //     // this.updataKaiJiangList();
        //     this.updataJiBengList();
        //     this.updataLengReList();
        //     this.updataHeZhiList();
        // }
        // if (this.istheFirst == false) {
        //     return;
        // }
        // // this.updataKaiJiangList();
        // this.updataJiBengList();
        // this.updataLengReList();
        // this.updataHeZhiList();
        // this.timer = new egret.Timer(1000, 0);
        // this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        // this.timer.start();
        // this.istheFirst = false;
    };
    Page1.prototype.updataKaiJiangList = function (arr) {
        this.kaijiangArrayCollection = new eui.ArrayCollection(arr);
        this.kaijiangList.dataProvider = this.kaijiangArrayCollection;
        this.kaijiangList.itemRenderer = KaiJiangItem;
        this.myscroller.verticalScrollBar.autoVisibility = false;
        this.myscroller.horizontalScrollBar.autoVisibility = false;
        this.myscroller.scrollPolicyH = eui.ScrollPolicy.OFF;
        var self = this;
        this.myscroller.bounces = true;
        //this.mygroup.cacheAsBitmap=true;
        //  this.kaijiangList.addEventListener(egret.Event.RENDER, () => { self.kaijiangList.cacheAsBitmap = true }, this)
        //this.kaijiangList.cacheAsBitmap = true;
        // setTimeout(function () {
        //     self.kaijiangList.cacheAsBitmap = true;
        // }, 700);
    };
    Page1.prototype.updataJiBengList = function () {
        // var arraycollection = new eui.ArrayCollection(GlobalData.JiBengList);
        // this.jjibengList.dataProvider = arraycollection;
        // this.jjibengList.itemRenderer = JiBengItem;
        // var self = this;
        //this.jjibengList.useVirtualLayout=true;
        //this.jjibengList.cacheAsBitmap=true;
        //this.jjibengList.addEventListener(egret.Event.RENDER,()=>{self.jjibengList.cacheAsBitmap=true},this)
    };
    Page1.prototype.updataLengReList = function () {
        // var arraycollection = new eui.ArrayCollection(GlobalData.LengReList);
        // this.lengreList.dataProvider = arraycollection;
        // this.lengreList.itemRenderer = LengReItem;
        // var self = this;
        //this.lengreList.addEventListener(egret.Event.RENDER,()=>{self.lengreList.cacheAsBitmap=true},this)
    };
    Page1.prototype.updataHeZhiList = function () {
        // var arraycollection = new eui.ArrayCollection(GlobalData.HeZhiList);
        // this.hezhiList.dataProvider = arraycollection;
        // this.hezhiList.itemRenderer = HeZhiItem;
        // var self = this;
        //this.hezhiList.addEventListener(egret.Event.RENDER,()=>{self.hezhiList.cacheAsBitmap=true},this)
    };
    //每秒更新：
    Page1.prototype.upDatePage = function () {
        // GlobalData.GameVO.timeLeft = GlobalData.GameVO.timeLeft - 1;
        // if (GlobalData.GameVO.timeLeft == 0) {
        //     GlobalData.GameVO.timeLeft = 600;
        //     GlobalData.GameVO.nextPeriod = GlobalData.GameVO.nextPeriod + 1;
        //     this.analysisData();
        // }
        // GlobalData.GameVO.nowTime = this.toTime(GlobalData.GameVO.timeLeft);
        // this.time_left.text = GlobalData.GameVO.nowTime;
        // var per = GlobalData.GameVO.timeLeft / 600;
        // var rect = new egret.Rectangle(0, 0, per * this.timebar.width, this.timebar.height);
        // this.timebar.mask = rect;
        // if (GlobalData.GameVO.theWinnerNumber.length > 0) {
        //     var num1 = GlobalData.GameVO.theWinnerNumber[0];
        //     var num2 = GlobalData.GameVO.theWinnerNumber[1];
        //     var num3 = GlobalData.GameVO.theWinnerNumber[2];
        //     this.updataSaizi(num1, num2, num3);
        // } else {
        //     var num1 = GlobalData.GameVO.beforeWinnerNumber[0];
        //     var num2 = GlobalData.GameVO.beforeWinnerNumber[1];
        //     var num2 = GlobalData.GameVO.beforeWinnerNumber[2];
        //     if (num1 && num2 && num3) {
        //         this.updataSaizi(num1, num2, num3);
        //     }
        // }
    };
    Page1.prototype.initButton = function () {
        this.btn_kaijiang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.btn_jibengzhoushi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.btn_hezhizhoushi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.btn_lengre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    };
    Page1.prototype.onTouch = function (e) {
        switch (e.target) {
            case this.btn_kaijiang:
                this.setButtonColor();
                this.select_kaijaing.textColor = GameConfig.TextColors.orangeYellow;
                this.setHeadVisibel();
                this.kajiang_head.visible = true;
                this.setListVisible();
                this.kaijiangList.visible = true;
                this.myscroller.scrollPolicyH = eui.ScrollPolicy.OFF;
                break;
            case this.btn_jibengzhoushi:
                this.setButtonColor();
                this.select_hezhizhoushi.textColor = GameConfig.TextColors.orangeYellow;
                this.setHeadVisibel();
                this.jibengzhoushi_head.visible = true;
                this.setListVisible();
                this.jjibengList.visible = true;
                this.myscroller.scrollPolicyH = eui.ScrollPolicy.OFF;
                break;
            case this.btn_hezhizhoushi:
                this.setButtonColor();
                this.select_jibengzhoushi.textColor = GameConfig.TextColors.orangeYellow;
                this.setHeadVisibel();
                this.hezhizhoushi_head.visible = true;
                this.setListVisible();
                this.hezhiList.visible = true;
                break;
            case this.btn_lengre:
                this.setButtonColor();
                this.select_lengre.textColor = GameConfig.TextColors.orangeYellow;
                this.setHeadVisibel();
                this.lengre_head.visible = true;
                this.setListVisible();
                this.lengreList.visible = true;
                this.myscroller.scrollPolicyV = eui.ScrollPolicy.OFF;
                this.myscroller.scrollPolicyH = eui.ScrollPolicy.OFF;
                break;
        }
    };
    Page1.prototype.setButtonColor = function () {
        for (var i = 0; i < this.buttonArray.length; i++) {
            this.buttonArray[i].textColor = 0xffffff;
        }
    };
    Page1.prototype.setHeadVisibel = function () {
        for (var i = 0; i < this.headArray.length; i++) {
            this.headArray[i].visible = false;
        }
        this.myscroller.scrollPolicyV = eui.ScrollPolicy.AUTO;
        this.myscroller.scrollPolicyH = eui.ScrollPolicy.AUTO;
    };
    Page1.prototype.setListVisible = function () {
        for (var i = 0; i < this.listArray.length; i++) {
            this.listArray[i].visible = false;
        }
        this.myscroller.stopAnimation();
        this.myscroller.viewport.scrollV = 0;
        this.myscroller.viewport.scrollH = 0;
    };
    Page1.prototype.toTime = function (num) {
        console.log(num);
        var minute = Math.floor(num / 60);
        var second = Math.floor(num % 60);
        if (minute > 9) {
            var result1 = minute.toString() + " : ";
        }
        else {
            var result1 = "0" + minute.toString() + " : ";
        }
        if (second > 9) {
            var result2 = second.toString();
        }
        else {
            var result2 = "0" + second.toString();
        }
        return result1 + result2;
    };
    return Page1;
}(eui.Component));
__reflect(Page1.prototype, "Page1");
