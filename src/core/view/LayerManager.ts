
module game {

    export class LayerManager {

        public static SCENE: number = 1;
        public static VIEW: number = 2;
        public static PANEL: number = 3;
        public static MASK: number = 4;

        private static Ins: LayerManager;
        public static getInstance(): LayerManager {
            if (!this.Ins) {
                this.Ins = new LayerManager();
            }
            return this.Ins;
        }

        public sceneLayer: eui.UILayer;

        public viewLayer: eui.UILayer;

        public panelLayer: eui.UILayer;

        public maskLayer: eui.UILayer;

        public init(): void {
            this.sceneLayer = new eui.UILayer();
            this.viewLayer = new eui.UILayer();
            this.panelLayer = new eui.UILayer();
            this.maskLayer = new eui.UILayer();

            this.sceneLayer.touchThrough = true;
            this.viewLayer.touchThrough = true;
            this.panelLayer.touchThrough = true;
            this.maskLayer.touchThrough = true;
            this.sceneLayer.touchEnabled = false;
            this.viewLayer.touchEnabled = false;
            this.panelLayer.touchEnabled = false;
            this.maskLayer.touchEnabled = false;

            let stage = egret.MainContext.instance.stage;
            stage.addChild(this.sceneLayer);
            stage.addChild(this.viewLayer);
            stage.addChild(this.panelLayer);
            stage.addChild(this.maskLayer);

            // StageBtnUtils.init();
        }

    }
}