namespace Game {

  import ƒ = FudgeCore;

  export class Wolf extends Enemy {

    constructor() {
      super();
      this.health = 100;
      this.strength = 10;
      this.attackspeed = 1000; //in ms

      this.addComponent(new ƒ.ComponentTransform());
      this.show(ACTION.WOLF_IDLE);
      ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, this.update);
    }

    private update = (_event: ƒ.Eventƒ): void => {
      let timeFrame: number = ƒ.Loop.timeFrameGame / 1000;
      this.speed.y += Player.gravity.y * timeFrame;
      let distance: ƒ.Vector3 = ƒ.Vector3.SCALE(this.speed, timeFrame);
      this.cmpTransform.local.translate(distance);

      this.checkCollision();
      this.checkPlayerCollision();

      if (this.health <= 0) {
        this.show(ACTION.WOLF_DEATH);
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
        }
      }
    }

    private checkPlayerCollision(): void {
      let rect: ƒ.Rectangle = player.getRectPlayer();
      let hit: boolean = rect.isInside(this.cmpTransform.local.translation.toVector2());
      if (hit) {
          if (this.canTakeDamage && this.health > 0 && isAttacking) {
            this.health -= player.strength;
            this.canTakeDamage = false;
            setTimeout(() => {
              this.canTakeDamage = true;
            }, player.attackspeed);
          }
      }
    }

    public getAttackSpeed(): number {
      return this.attackspeed;
    }

    public getStrength(): number {
      return this.strength;
    }
  }
}