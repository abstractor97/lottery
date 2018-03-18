class HintPanelMediator extends BaseMediator {
    public static NAME: string = "HintPanelMediator";
    public constructor(viewComponent: any = null) {
        super(HintPanelMediator.NAME, viewComponent);
        this.viewComponent = this.panel;
    }

    public listNotificationInterests() {
        return [
            PanelNotify.OPEN_HINTPANEL,
            PanelNotify.CLOSE_HINTPANEL
        ]
    }

    public panel = new HintPanel();
    public handleNotification(notification: puremvc.INotification) {
        let data: any = notification.getBody();
        console.log("entry room:", data);

        switch (notification.getName()) {
            case PanelNotify.OPEN_HINTPANEL:
                this.showUI(PopType.ALPHAIN);
                this.updateState(data);
                break;
            case PanelNotify.CLOSE_HINTPANEL:
                this.hideUI();
                break;
        }
    }

    private updateState(state) {
        this.panel.setState(state);
    }

    public show(): void {
        super.show();
    }

    public hide(): void {
        super.hide();
    }
}