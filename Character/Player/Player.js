"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Player extends Game.Character {
        constructor() {
            super();
            this.update = (_event) => {
                if (this.isDying) {
                    this.show(Game.ACTION.PLAYER_DEAD);
                    return;
                }
                let timeFrame = ƒ.Loop.timeFrameGame / 1000;
                this.speed.y += Player.gravity.y * timeFrame;
                let distance = ƒ.Vector3.SCALE(this.speed, timeFrame);
                this.cmpTransform.local.translate(distance);
                this.checkCollision();
                this.checkMobCollision();
                if (this.health <= 0) {
                    Game.gameOver = true;
                }
            };
            this.health = 100;
            this.strength = 50;
            this.attackspeed = 1000; //in ms
            this.speedMax = new ƒ.Vector2(1.5, 5); //units per second
            this.addComponent(new ƒ.ComponentTransform());
            this.show(Game.ACTION.PLAYER_IDLE);
            ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
        }
        act(_action, _direction) {
            switch (_action) {
                case Game.ACTION.PLAYER_IDLE:
                    this.speed.x = 0;
                    break;
                case Game.ACTION.PLAYER_ATTACK:
                    this.speed.x = 0;
                    break;
                case Game.ACTION.PLAYER_DIE:
                    this.speed.x = 0;
                    setTimeout(() => {
                        this.isDying = true;
                    }, 1000);
                    break;
                case Game.ACTION.PLAYER_WALK:
                    let direction = (_direction == Game.DIRECTION.RIGHT ? 1 : -1);
                    this.speed.x = this.speedMax.x; // * direction;
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
                let rect = element.getRectElement();
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
        checkMobCollision() {
            for (let enemy of Game.enemies.getChildren()) {
                let rect = enemy.getRectEnemy();
                let hit = rect.isInside(this.cmpTransform.local.translation.toVector2());
                if (hit) {
                    let attackSpeed = enemy.getAttackSpeed();
                    let strength = enemy.getStrength();
                    let isDead = enemy.getIsDead();
                    if (this.canTakeDamage && this.health > 0 && !this.isBlocking && !isDead) {
                        this.health -= strength;
                        this.canTakeDamage = false;
                        setTimeout(() => {
                            this.canTakeDamage = true;
                        }, attackSpeed);
                    }
                }
            }
        }
        getRectPlayer() {
            let rect = ƒ.Rectangle.GET(0, 0, 100, 100);
            let topleft = new ƒ.Vector3(-0.5, 0.5, 0);
            let bottomright = new ƒ.Vector3(0.5, -0.5, 0);
            let mtxResult = ƒ.Matrix4x4.MULTIPLICATION(this.mtxWorld, Player.pivot);
            mtxResult = ƒ.Matrix4x4.MULTIPLICATION(mtxResult, ƒ.Matrix4x4.SCALING(new ƒ.Vector3(2, 2, 2)));
            topleft.transform(mtxResult, true);
            bottomright.transform(mtxResult, true);
            let size = new ƒ.Vector2(bottomright.x - topleft.x, bottomright.y - topleft.y);
            rect.position = topleft.toVector2();
            rect.size = size;
            return rect;
        }
    }
    Player.pivot = ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.Y(-0.5));
    Game.Player = Player;
})(Game || (Game = {}));
//# sourceMappingURL=Player.js.map