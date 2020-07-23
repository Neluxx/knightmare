"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Player extends Game.Character {
        constructor() {
            super();
            this.update = (_event) => {
                let timeFrame = ƒ.Loop.timeFrameGame / 1000;
                this.speed.y += Player.gravity.y * timeFrame;
                let distance = ƒ.Vector3.SCALE(this.speed, timeFrame);
                this.cmpTransform.local.translate(distance);
                this.checkCollision();
            };
            this.addComponent(new ƒ.ComponentTransform());
            this.show(Game.ACTION.PLAYER_IDLE);
            ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
        }
        act(_action, _direction) {
            //move, jump or attack
            switch (_action) {
                case Game.ACTION.PLAYER_IDLE:
                    this.speed.x = 0;
                    break;
                case Game.ACTION.PLAYER_WALK:
                    let direction = (_direction == Game.DIRECTION.RIGHT ? 1 : -1);
                    this.speed.x = Player.speedMax.x; // * direction;
                    this.cmpTransform.local.rotation = ƒ.Vector3.Y(90 - 90 * direction);
                    break;
                case Game.ACTION.PLAYER_JUMP:
                    if (!this.inAir) {
                        this.speed.y = 2;
                        this.inAir = true;
                    }
                    break;
            }
            if (_action == this.action)
                return;
            this.action = _action;
            this.show(_action);
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
                    this.inAir = false;
                }
            }
        }
    }
    Game.Player = Player;
})(Game || (Game = {}));
//# sourceMappingURL=Player.js.map