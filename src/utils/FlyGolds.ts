
class FlyGolds {

    public static Ins: FlyGolds = new FlyGolds();

    // private goldImgs:egret.Bitmap[];

    public init(): void {
        // this.goldImgs = [];
    }

    public async fly(srcx: number, srcy: number, disx: number, disy: number, nums: number = 1) {
        for (let i = 0; i < nums; ++i) {
            let img = Tools.createBitmapByName('golds_png');
            Tools.center(img);
            game.LayerManager.getInstance().maskLayer.addChild(img);

            img.x = srcx + 25 - Math.round(Math.random() * 50);
            img.y = srcy + 25 - Math.round(Math.random() * 50);

            let t = Math.round(Math.random() * 200);
            // let t = 0;
            img.alpha = 0;
            egret.Tween.get(img).to({ alpha: 1 }, t).to({ x: disx, y: disy }, 600, egret.Ease.cubicOut);
            egret.setTimeout(() => {
                Tools.removeFromParent(img);
            }, this, 600+t);
        }
    }
}