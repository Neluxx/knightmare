"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    var ƒAid = FudgeAid;
    class Player extends ƒAid.NodeSprite {
        constructor(_name = "Player") {
            super(_name);
            this.speed = ƒ.Vector3.ZERO();
            this.update = (_event) => {
                let timeFrame = ƒ.Loop.timeFrameGame / 1000;
                this.speed.y += Player.gravity.y * timeFrame;
                let distance = ƒ.Vector3.SCALE(this.speed, timeFrame);
                this.cmpTransform.local.translate(distance);
                this.checkCollision();
            };
            this.addComponent(new ƒ.ComponentTransform());
            this.show(Game.ACTION.IDLE);
            ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
        }
        show(_action) {
            //show only the animation defined for the action
            if (_action == Game.ACTION.JUMP)
                return;
            this.setAnimation(Game.SpriteGenerator.animations[_action]);
        }
        act(_action, _direction) {
            //move, jump or attack
            switch (_action) {
                case Game.ACTION.IDLE:
                    this.speed.x = 0;
                    break;
                case Game.ACTION.WALK:
                    let direction = (_direction == Game.DIRECTION.RIGHT ? 1 : -1);
                    this.speed.x = Player.speedMax.x; // * direction;
                    this.cmpTransform.local.rotation = ƒ.Vector3.Y(90 - 90 * direction);
                    break;
                case Game.ACTION.JUMP:
                    this.speed.y = 2;
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
                }
            }
        }
    }
    Player.speedMax = new ƒ.Vector2(1.5, 5); // units per second
    Player.gravity = ƒ.Vector2.Y(-3);
    Game.Player = Player;
})(Game || (Game = {}));
//# sourceMappingURL=Player.js.map