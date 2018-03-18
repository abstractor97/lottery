class KaiJiangItem extends eui.ItemRenderer {
    public bg2: eui.Image;
    public bg: eui.Image;
    public hezhi: eui.Label;
    public kaijianghao: eui.Label;
    public danshuan: eui.Label;
    public daxiao: eui.Label;
    public qishu: eui.Label;


    public constructor() {
        super();
        this.once(eui.UIEvent.COMPLETE, this.onComplete, this);
        this.skinName = "KaiJiangItemSkin";
    }

    private onComplete() {
        this.cacheAsBitmap = true;
        var self = this;
        setTimeout(function () {
            var peroid = parseInt(self.data.period);
            if (peroid % 2 == 0) {
                self.bg.visible = false;
            }
        }, 100);

    }
}