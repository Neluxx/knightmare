namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class Enemy extends Character {

    constructor() {
      super();
      this.addComponent(new ƒ.ComponentTransform());
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