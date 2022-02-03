"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Witch extends Game.Enemy {
        static pivot = ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.Y(-0.5));
        constructor() {
            super();
            this.health = Game.data.witch.health;
            this.strength = Game.data.witch.strength;
            this.attackspeed = Game.data.witch.attackspeed; //in ms
            this.speedMax = new ƒ.Vector2(Game.data.witch.speedMax, 5); //units per second
            this.addComponent(new ƒ.ComponentTransform());
            this.show(Game.ACTION.WITCH_IDLE);
            ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, this.update);
        }
        act(_action, _direction) {
            switch (_action) {
                case Game.ACTION.WITCH_ATTACK:
                    this.direct = (_direction == Game.DIRECTION.RIGHT ? 1 : -1);
                    this.cmpTransform.local.rotation = ƒ.Vector3.Y(90 - 90 * this.direct);
                    this.speed.x = 0;
                    break;
                case Game.ACTION.WITCH_IDLE:
                    this.speed.x = 0;
                    break;
                case Game.ACTION.WITCH_DIE:
                    this.speed.x = 0;
                    setTimeout(() => {
                        Game.playSound(Game.audioEnemyDie);
                        this.isDying = true;
                    }, 750);
                    break;
                case Game.ACTION.WITCH_WALK:
                    this.direct = (_direction == Game.DIRECTION.RIGHT ? 1 : -1);
                    this.speed.x = this.speedMax.x; // * direction;
                    this.cmpTransform.local.rotation = ƒ.Vector3.Y(90 - 90 * this.direct);
                    break;
            }
            if (_action == this.action)
                return;
            this.action = _action;
            this.show(_action);
        }
        playerDetection() {
            if (Math.abs(Game.player.cmpTransform.local.translation.x - this.cmpTransform.local.translation.x) < 3 && Math.abs(Game.player.cmpTransform.local.translation.x - this.cmpTransform.local.translation.x) > 1.1 && !Game.gameOver) {
                if (Game.player.cmpTransform.local.translation.x > this.cmpTransform.local.translation.x) {
                    this.act(Game.ACTION.WITCH_WALK, Game.DIRECTION.RIGHT);
                }
                else {
                    this.act(Game.ACTION.WITCH_WALK, Game.DIRECTION.LEFT);
                }
            }
            else if (Math.abs(Game.player.cmpTransform.local.translation.x - this.cmpTransform.local.translation.x) < 3 && Math.abs(Game.player.cmpTransform.local.translation.x - this.cmpTransform.local.translation.x) < 1.1 && !Game.gameOver) {
                if (Game.player.cmpTransform.local.translation.x > this.cmpTransform.local.translation.x) {
                    this.act(Game.ACTION.WITCH_ATTACK, Game.DIRECTION.RIGHT);
                }
                else {
                    this.act(Game.ACTION.WITCH_ATTACK, Game.DIRECTION.LEFT);
                }
            }
            else {
                this.act(Game.ACTION.WITCH_IDLE);
            }
        }
        update = (_event) => {
            if (this.isDying) {
                this.show(Game.ACTION.WITCH_DEAD);
                return;
            }
            if (!this.isDead) {
                this.playerDetection();
                let timeFrame = ƒ.Loop.timeFrameGame / 1000;
                this.speed.y += Game.Player.gravity.y * timeFrame;
                let distance = ƒ.Vector3.SCALE(this.speed, timeFrame);
                this.cmpTransform.local.translate(distance);
                this.checkCollision();
                this.checkPlayerCollision();
                if (this.health <= 0 && !this.isDead) {
                    this.isDead = true;
                    this.act(Game.ACTION.WITCH_DIE);
                }
            }
        };
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
                    Game.playSound(Game.audioEnemyHit);
                    this.canTakeDamage = false;
                    setTimeout(() => {
                        this.canTakeDamage = true;
                    }, Game.player.attackspeed);
                }
            }
        }
        getRectEnemy() {
            let rect = ƒ.Rectangle.GET(0, 0, 100, 100);
            let topleft = new ƒ.Vector3(-0.5, 0.5, 0);
            let bottomright = new ƒ.Vector3(0.5, -0.5, 0);
            let mtxResult = ƒ.Matrix4x4.MULTIPLICATION(this.mtxWorld, Witch.pivot);
            mtxResult = ƒ.Matrix4x4.MULTIPLICATION(mtxResult, ƒ.Matrix4x4.SCALING(new ƒ.Vector3(2.5, 2.5, 2.5)));
            topleft.transform(mtxResult, true);
            bottomright.transform(mtxResult, true);
            let size = new ƒ.Vector2(bottomright.x - topleft.x, bottomright.y - topleft.y);
            rect.position = topleft.toVector2();
            rect.size = size;
            return rect;
        }
        getAttackSpeed() {
            return this.attackspeed;
        }
        getStrength() {
            return this.strength;
        }
        getIsDead() {
            return this.isDead;
        }
    }
    Game.Witch = Witch;
})(Game || (Game = {}));
//# sourceMappingURL=Witch.js.map