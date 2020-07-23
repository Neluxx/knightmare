"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Bat extends Game.Enemy {
        constructor() {
            super();
            this.update = (_event) => {
                let timeFrame = ƒ.Loop.timeFrameGame / 1000;
                this.speed.y += Game.Player.gravity.y * timeFrame;
                let distance = ƒ.Vector3.SCALE(this.speed, timeFrame);
                this.cmpTransform.local.translate(distance);
                this.checkCollision();
            };
            this.addComponent(new ƒ.ComponentTransform());
            this.show(Game.ACTION.BAT_WALK);
            ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
        }
        checkCollision() {
            for (let element of Game.level.getChildren()) {
                let rect = element.getRectWorld();
                let hit = rect.isInside(this.cmpTransform.local.translation.toVector2());
                if (hit) {
                    let translation = this.cmpTransform.local.translation;
                    translation.y = rect.y;
                    this.cmpTransform.local.translation = translation;
                    this.speed.y = 0;
                }
            }
        }
    }
    Game.Bat = Bat;
})(Game || (Game = {}));
//# sourceMappingURL=Bat.js.map