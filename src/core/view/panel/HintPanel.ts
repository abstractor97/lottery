
class HintPanel extends eui.Component {

    private bg: eui.Image;
    private rightbtn: eui.Button;
    private leftbtn: eui.Button;
    private lbl_desc: eui.Label;

    constructor() {
        super();
        this.skinName = "skins.HintPanel";
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.leftbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.rightbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }

    private onTouchTap(e: egret.TouchEvent): void {
        switch (e.currentTarget) {
            case this.leftbtn:
                switch (this.currentState) {

                }
                break;
            case this.rightbtn:
                switch (this.currentState) {

                }
                break;
        }
    }

    public setState(state) {
        this.currentState = state;
        switch (state) {



        }
    }


    public async delayExec(delay: number, btnLabel: string, btn: eui.Button, func?: Function, thisObj?) {
        console.log('label', btnLabel);
        for (let i = delay; i >= 0; --i) {
            btn.label = btnLabel + `(${i}s)`;
            await Tools.sleep(1000);
        }
        if (func) {
            if (thisObj) {
                func.call(thisObj);
            } else {
                func();
            }
        }
    }
}