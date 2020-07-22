namespace Game {

  import ƒ = FudgeCore;

  export class Collider {

    //necessary?
    public static checkCollision(object: ƒ.Node): boolean {
      for (let element of level.getChildren()) {
        let rect: ƒ.Rectangle = (<Element>element).getRectWorld();
        let hit: boolean = rect.isInside(object.cmpTransform.local.translation.toVector2());
        if (hit) {
          return true;
        }
      }
      return false;
    }
  }
}