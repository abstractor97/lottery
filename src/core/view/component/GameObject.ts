class GameObject extends egret.Sprite {

    private $Htype: number = 0;

    public get Htype() {
        return this.$Htype;
    }

    public set Htype(type: number) {
        this.$Htype = type;
    }

    public constructor(type: number) {
        super();
        this.initUi(type);
        this.$Htype = type;
    }

    public initUi(type: number) {
        var obj: egret.Bitmap;
        switch (type) {
            case -1:
                var random = RandomUtils.limitInteger(0, 2);
                obj = Tools.createBitmapByName(`game_obj${random}_png`);
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                obj.width = obj.width * 1.2;
                obj.height = obj.height * 1.2;
                this.addChild(obj);
                break;

            case 1:
                console.log("1111");
                var random = RandomUtils.limitInteger(0, 3);

                obj = Tools.createBitmapByName(`score_item_1_${random}_png`);
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;
            case 2:
                console.log("2222");

                obj = Tools.createBitmapByName("score_item_2_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;
            case 3:
                console.log("333");

                obj = Tools.createBitmapByName("score_item_3_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;

            case 4:
                console.log("333");

                obj = Tools.createBitmapByName("score_item_4_png");
                obj.anchorOffsetX = obj.width / 2;
                obj.anchorOffsetY = obj.height / 2;
                this.addChild(obj);
                break;

        }
    }


    public addText(txt: string) {
        var textfeild = Tools.createBitmapByName(txt);
        this.addChild(textfeild);
        textfeild.x = 5;
        textfeild.y = 6;
    }

    public onDestroy() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    public onCreate() {

    }
}