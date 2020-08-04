namespace Game {  // test

  import ƒ = FudgeCore;

  export class Player extends Character {
    private static readonly pivot: ƒ.Matrix4x4 = ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.Y(-0.5));

    public inAir: boolean;
    public isDead: boolean = false;

    public constructor() {
      super();
      this.health = data.player.health;
      this.strength = data.player.strength;
      this.attackspeed = data.player.attackspeed; //in ms
      this.speedMax = new ƒ.Vector2(data.player.speedMax, 5); //units per second

      this.addComponent(new ƒ.ComponentTransform());
      this.show(ACTION.PLAYER_IDLE);
      ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, this.update);
    }

    public act(_action: ACTION, _direction?: DIRECTION): void {
      switch (_action) {
        case ACTION.PLAYER_IDLE:
          this.speed.x = 0;
          break;
        case ACTION.PLAYER_ATTACK:
          this.speed.x = 0;
          if (!this.soundPlayed) {
            playSound(audioPlayerAttack);
            this.soundPlayed = true;
            setTimeout(() => {
              this.soundPlayed = false;
            }, 1200);
          }
          break;
        case ACTION.PLAYER_SHIELD:
          this.speed.x = 0;
          break;
        case ACTION.PLAYER_DIE:
          this.speed.x = 0;
          if (!this.soundPlayed && !this.isDead) {
            playSound(audioPlayerDie);
            this.soundPlayed = true;
            this.isDead = true;
          }
          setTimeout(() => {
            this.isDying = true;
          }, 1000);
          break;
        case ACTION.PLAYER_WALK:
          let direction: number = (_direction == DIRECTION.RIGHT ? 1 : -1);
          this.speed.x = this.speedMax.x; // * direction;
          this.cmpTransform.local.rotation = ƒ.Vector3.Y(90 - 90 * direction);
          if (!this.soundPlayed) {
            playSound(audioPlayerWalk);
            this.soundPlayed = true;
            setTimeout(() => {
              this.soundPlayed = false;
            }, 750);
          }
          break;
        case ACTION.PLAYER_JUMP:
          if (!this.inAir) {
            this.speed.y = 2;
            this.inAir = true;
            playSound(audioPlayerJump);
          }
          break;
      }
      if (_action == this.action)
        return;

      this.soundPlayed = false;
      this.action = _action;
      this.show(_action);
    }

    private update = (_event: ƒ.Eventƒ): void => {
      if (this.isDying) {
        this.show(ACTION.PLAYER_DEAD);
        return;
      }

      let timeFrame: number = ƒ.Loop.timeFrameGame / 1000;
      this.speed.y += Player.gravity.y * timeFrame;
      let distance: ƒ.Vector3 = ƒ.Vector3.SCALE(this.speed, timeFrame);
      this.cmpTransform.local.translate(distance);

      this.checkCollision();
      this.checkMobCollision();

      if (this.health <= 0) {
        gameOver = true;
      }
    }

    private checkCollision(): void {
      for (let element of level.getChildren()) {
        let rect: ƒ.Rectangle = (<Element>element).getRectElement();
        let hit: boolean = rect.isInside(this.cmpTransform.local.translation.toVector2());
        if (hit) {
          let translation: ƒ.Vector3 = this.cmpTransform.local.translation;
          translation.y = rect.y;
          this.cmpTransform.local.translation = translation;
          this.speed.y = 0;
          this.inAir = false;
        }
      }
    }

    private checkMobCollision(): void {
      for (let enemy of enemies.getChildren()) {
        let rect: ƒ.Rectangle = (<any>enemy).getRectEnemy();
        let hit: boolean = rect.isInside(this.cmpTransform.local.translation.toVector2());
        if (hit) {
          let attackSpeed = (<any>enemy).getAttackSpeed();
          let strength = (<any>enemy).getStrength();
          let isDead = (<any>enemy).getIsDead();

          if (this.canTakeDamage && this.health > 0 && !isBlocking && !isDead) {
            this.health -= strength;
            playSound(audioPlayerHit);
            this.canTakeDamage = false;
            setTimeout(() => {
              this.canTakeDamage = true;
            }, attackSpeed);
          }
          else if (this.canTakeDamage && this.health > 0 && isBlocking && !isDead) {
            playSound(audioPlayerBlock);
            this.canTakeDamage = false;
            setTimeout(() => {
              this.canTakeDamage = true;
            }, attackSpeed);
          }
        }
      }
    }

    public getRectPlayer(): ƒ.Rectangle {
      let rect: ƒ.Rectangle = ƒ.Rectangle.GET(0, 0, 100, 100);
      let topleft: ƒ.Vector3 = new ƒ.Vector3(-0.5, 0.5, 0);
      let bottomright: ƒ.Vector3 = new ƒ.Vector3(0.5, -0.5, 0);
      
      let mtxResult: ƒ.Matrix4x4 = ƒ.Matrix4x4.MULTIPLICATION(this.mtxWorld, Player.pivot);
      mtxResult = ƒ.Matrix4x4.MULTIPLICATION(mtxResult, ƒ.Matrix4x4.SCALING(new ƒ.Vector3(2, 2, 2)));
      topleft.transform(mtxResult, true);
      bottomright.transform(mtxResult, true);

      let size: ƒ.Vector2 = new ƒ.Vector2(bottomright.x - topleft.x, bottomright.y - topleft.y);
      rect.position = topleft.toVector2();
      rect.size = size;

      return rect;
    }
  }
}