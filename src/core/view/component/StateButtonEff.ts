/**
 *
 * @author 
 *
 */
class StateButtonEff extends egret.Sprite {
    public constructor() {
        super();
    }

    _angel;
    _bg: egret.Bitmap = new egret.Bitmap;
    state = 1;
    _img;
    _img1;
    public create(img: string,img1:string,angel: number): void {
        this._angel = angel;
        this._img = img;
        this._img1 = img1;
        this.updateState(1);
        this.addChild(this._bg);
        this.anchorOffsetX = this._bg.width / 2;
        this.anchorOffsetY = this._bg.height / 2;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.btnClick,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.btnClick,this);
    }

    public updateState(s: number): void {
        this.state = s;
        if(this.state == 1) {
            this._bg.texture = RES.getRes(this._img);
        } else {
            this._bg.texture = RES.getRes(this._img1);
        }
    }

    private btnClick(event: egret.TouchEvent): void {
        var sp: egret.Sprite = event.currentTarget;
        if(event.type == egret.TouchEvent.TOUCH_BEGIN) {
            egret.Tween.removeTweens(sp);
            egret.Tween.get(sp).to({ rotation: this._angel,scaleX: 0.8,scaleY: 0.8 },300);
        } else if(event.type == egret.TouchEvent.TOUCH_END) {
            egret.Tween.removeTweens(sp);
            egret.Tween.get(sp).to({ rotation: 0,scaleX: 1,scaleY: 1 },300);
        }
    }

    public static create(img: string,img1: string,angel: number): StateButtonEff {
        var btn = new StateButtonEff;
        btn.create(img,img1,angel);
        return btn;
    }
}
