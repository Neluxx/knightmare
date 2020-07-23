namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class Bat extends Enemy {

    constructor() {
      super();
      this.addComponent(new ƒ.ComponentTransform());
      this.show(ACTION.BAT_WALK);
      ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, this.update);
    }

    private update = (_event: ƒ.Eventƒ): void => {
      let timeFrame: number = ƒ.Loop.timeFrameGame / 1000;
      this.speed.y += Player.gravity.y * timeFrame;
      let distance: ƒ.Vector3 = ƒ.Vector3.SCALE(this.speed, timeFrame);
      this.cmpTransform.local.translate(distance);

      this.checkCollision();
    }

    private checkCollision(): void {
      for (let element of level.getChildren()) {
        let rect: ƒ.Rectangle = (<Element>element).getRectWorld();
        let hit: boolean = rect.isInside(this.cmpTransform.local.translation.toVector2());
        if (hit) {
          let translation: ƒ.Vector3 = this.cmpTransform.local.translation;
          translation.y = rect.y;
          this.cmpTransform.local.translation = translation;
          this.speed.y = 0;
        }
      }
    }
  }
}