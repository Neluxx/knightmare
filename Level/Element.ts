namespace Game {
  import ƒ = FudgeCore;

  export class Element extends Level {
    private static mesh: ƒ.MeshSprite = new ƒ.MeshSprite();
    private static material: ƒ.Material = new ƒ.Material("Element", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("green")));
    private static readonly pivot: ƒ.Matrix4x4 = ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.Y(-0.5));

    public constructor() {
      super();
      this.addComponent(new ƒ.ComponentTransform());
      this.addComponent(new ƒ.ComponentMaterial(Element.material));
      let cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(Element.mesh);
      cmpMesh.pivot = Element.pivot;
      this.addComponent(cmpMesh);
    }

    public getRectElement(): ƒ.Rectangle {
      let rect: ƒ.Rectangle = ƒ.Rectangle.GET(0, 0, 100, 100);
      let topleft: ƒ.Vector3 = new ƒ.Vector3(-0.5, 0.5, 0);
      let bottomright: ƒ.Vector3 = new ƒ.Vector3(0.5, -0.5, 0);
      
      let mtxResult: ƒ.Matrix4x4 = ƒ.Matrix4x4.MULTIPLICATION(this.mtxWorld, Element.pivot);
      topleft.transform(mtxResult, true);
      bottomright.transform(mtxResult, true);

      let size: ƒ.Vector2 = new ƒ.Vector2(bottomright.x - topleft.x, bottomright.y - topleft.y);
      rect.position = topleft.toVector2();
      rect.size = size;

      return rect;
    }
  }
}