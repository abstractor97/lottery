var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        this.initMusic();
    }
    SoundManager.prototype.initMusic = function () {
        SoundManager.soundBg = document.getElementById("bgMusic");
        // SoundManager.soundBg.src = "resource/common/hai.mp3";
        // SoundManager.soundBg.play();
        // SoundManager.soundBg.pause();
        if (SoundManager.soundBg) {
            this.createMusicBtn();
            var self = this;
        }
    };
    SoundManager.prototype.createMusicBtn = function () {
        console.log('create music btn');
        this.musicBtn = StateButtonEff.create("music2_png", "music2_png", 0);
        this.musicBtn.visible = true;
        game.LayerManager.getInstance().maskLayer.addChild(this.musicBtn);
        this.musicBtn.x = 590;
        this.musicBtn.y = 45;
        egret.Tween.get(this.musicBtn, { loop: true }).to({ rotation: 360 }, 4000);
        this.musicBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickMusicBtn, this);
    };
    SoundManager.prototype.onClickMusicBtn = function (event) {
        if (this.musicBtn.state == 1) {
            this.musicBtn.state = 0;
            if (SoundManager.soundBg) {
                SoundManager.soundBg.pause();
                egret.Tween.removeTweens(this.musicBtn);
                this.musicBtn.rotation = 0;
            }
        }
        else {
            this.musicBtn.state = 1;
            if (SoundManager.soundBg) {
                SoundManager.soundBg.play();
                this.musicBtn.rotation = 0;
                egret.Tween.get(this.musicBtn, { loop: true }).to({ rotation: 360 }, 4000);
            }
        }
        this.musicBtn.updateState(this.musicBtn.state);
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
