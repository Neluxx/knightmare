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
                this.checkPlayerCollision();
                if (this.health <= 0 && this.action != Game.ACTION.BAT_DEATH) {
                    this.show(Game.ACTION.BAT_DEATH);
                    this.action = Game.ACTION.BAT_DEATH;
                }
            };
            this.health = 100;
            this.strength = 2;
            this.attackspeed = 1000; //in ms
            this.addComponent(new ƒ.ComponentTransform());
            this.show(Game.ACTION.BAT_WALK);
            this.action = Game.ACTION.BAT_WALK;
            ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
        }
        checkCollision() {
            for (let element of Game.level.getChildren()) {
                let rect = element.getRectElement();
                let hit = rect.isInside(this.cmpTransform.local.translation.toVector2());
                if (hit) {
                    let translation = this.cmpTransform.local.translation;
                    translation.y = rect.y;
                    this.cmpTransform.local.translation = translation;
                    this.speed.y = 0;
                }
            }
        }
        checkPlayerCollision() {
            let rect = Game.player.getRectPlayer();
            let hit = rect.isInside(this.cmpTransform.local.translation.toVector2());
            if (hit) {
                if (this.canTakeDamage && this.health > 0 && Game.isAttacking) {
                    this.health -= Game.player.strength;
                    this.canTakeDamage = false;
                    setTimeout(() => {
                        this.canTakeDamage = true;
                    }, Game.player.attackspeed);
                }
            }
        }
        getAttackSpeed() {
            return this.attackspeed;
        }
        getStrength() {
            return this.strength;
        }
    }
    Game.Bat = Bat;
})(Game || (Game = {}));
//# sourceMappingURL=Bat.js.map