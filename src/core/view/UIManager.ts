
module game {

    export class UIManager {

        private darkSprite: egret.Shape;
        private viewDarkSprite: egret.Shape;
        public constructor() {

            this.darkSprite = new egret.Sprite();
            this.darkSprite.graphics.clear();
            this.darkSprite.graphics.beginFill(0x000000, 0.3);
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth, GameConfig.curHeight);
            this.darkSprite.graphics.endFill();
            this.darkSprite.width = GameConfig.curWidth;
            this.darkSprite.height = GameConfig.curHeight;
            this.darkSprite.touchEnabled = true;

            this.viewDarkSprite = new egret.Sprite();
            this.viewDarkSprite.graphics.clear();
            this.viewDarkSprite.graphics.beginFill(0x000000, 0.3);
            this.viewDarkSprite.graphics.drawRect(0, 0, GameConfig.curWidth, GameConfig.curHeight);
            this.viewDarkSprite.graphics.endFill();
            this.viewDarkSprite.width = GameConfig.curWidth;
            this.viewDarkSprite.height = GameConfig.curHeight;
            this.viewDarkSprite.touchEnabled = true;
        }

        private static ins: UIManager;
        public static getInstance(): UIManager {
            if (!this.ins) {
                this.ins = new UIManager();
            }
            return this.ins;
        }

        public changeScene(panel, effect: string = '') {
            let con = game.LayerManager.getInstance().sceneLayer;
            con.addChild(panel);
            if (effect) {
                this.play(panel, effect);
            }
        }

        public changeView(panel, effect: string = '', dark: boolean = true) {
            let con = game.LayerManager.getInstance().viewLayer;
            if (dark && !this.viewDarkSprite.parent) {
                con.addChild(this.viewDarkSprite);
            }
            con.addChild(panel);
            if (effect) {
                this.play(panel, effect);
            }
        }

        public changePanel(panel, effect: string = '', dark: boolean = true) {
            let con = game.LayerManager.getInstance().panelLayer;
            if (dark && !this.darkSprite.parent) {
                con.addChild(this.darkSprite);
            }
            con.addChild(panel);
            if (effect) {
                this.play(panel, effect);
            }
        }

        public hidePanel(panel, effect: string = '') {
            Tools.removeFromParent(this.darkSprite);
            if (effect) {
                console.log("@######");
                this.play(panel, effect);
            } else {
                Tools.removeFromParent(panel);
                panel = null;
            }
        }

        private play(nowView, effect: string, effectdata: Object = null): void {
            var className = egret.getDefinitionByName(effect);
            var pageSwitch: game.IPanelSwitch = new className();
            if (pageSwitch) {
                pageSwitch.switching(nowView, Tools.removeFromParent, this, effectdata);
            }
        }
    }
}