

class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;


    private createView(): void {
        var bgMusic = new SoundManager();
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.text = '0%';
        this.textField.y = 518 - this.textField.height / 2;
        this.textField.x = 320 - this.textField.width / 2;
        this.textField.textColor = 0x000000;
        // this.textField.y = 300;
        // this.textField.width = 480;
        // this.textField.height = 100;
        // this.textField.textAlign = "center";
    }

    public setProgress(current: number, total: number): void {
        let perc = Math.floor(current * 100 / total);

        this.textField.text = `${perc}%`;

    }
}
