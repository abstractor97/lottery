
class BaseMediator extends puremvc.Mediator implements puremvc.IMediator {

    private static isInitialized: boolean = false; //是否初始化
    private static isPopUp: boolean = false; //是否弹出

    public w: number = 0;
    public h: number = 0;

    public constructor(mediatorName: string = '', viewComponent: Object = null) {
        super(mediatorName, viewComponent);
        this.w = GameConfig.curWidth;
        this.h = GameConfig.curHeight;
    }

    public showUI(effect: string = '', data?: any, layer: number = game.LayerManager.PANEL, dark: boolean = true) {
        this.show();
        switch (layer) {
            case game.LayerManager.SCENE:
                game.UIManager.getInstance().changeScene(this.getViewComponent(), effect);
                break;
            case game.LayerManager.VIEW:
                game.UIManager.getInstance().changeView(this.getViewComponent(), effect, dark);
                break;
            case game.LayerManager.PANEL:
                game.UIManager.getInstance().changePanel(this.getViewComponent(), effect, dark);
                break;
            case game.LayerManager.MASK:

                break;
        }
    }

    public show(): void {
    }

    public hide(): void {
    }

    public hideUI(effect: string = ''): void {
        this.hide();
        game.UIManager.getInstance().hidePanel(this.getViewComponent(), effect);
        this.destroy();
    }

    public destroy(): void {

    }
}