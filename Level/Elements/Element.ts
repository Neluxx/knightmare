namespace Game {
  import ƒ = FudgeCore;

  export class Element extends Level {
    private readonly pivot: ƒ.Matrix4x4 = ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.Y(0.275));

    public constructor(name: string) {
      super();
      this.addComponent(new ƒ.ComponentTransform());
      this.setAnimation(<ƒAid.SpriteSheetAnimation>SpriteGenerator.tileset[name]);
    }

    public getRectElement(): ƒ.Rectangle {
      let rect: ƒ.Rectangle = ƒ.Rectangle.GET(0, 0, 100, 100);
      let topleft: ƒ.Vector3 = new ƒ.Vector3(-0.5, 0.5, 0);
      let bottomright: ƒ.Vector3 = new ƒ.Vector3(0.5, -0.5, 0);
      
      let mtxResult: ƒ.Matrix4x4 = ƒ.Matrix4x4.MULTIPLICATION(this.mtxWorld, this.pivot);
      mtxResult = ƒ.Matrix4x4.MULTIPLICATION(mtxResult, ƒ.Matrix4x4.SCALING(new ƒ.Vector3(0.5, 1, 1)));
      topleft.transform(mtxResult, true);
      bottomright.transform(mtxResult, true);

      let size: ƒ.Vector2 = new ƒ.Vector2(bottomright.x - topleft.x, bottomright.y - topleft.y);
      rect.position = topleft.toVector2();
      rect.size = size;

      return rect;
    }
  }
}