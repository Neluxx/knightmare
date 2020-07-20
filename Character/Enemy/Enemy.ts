namespace Game {
  
  import ƒ = FudgeCore;

  export class Enemy extends ƒ.Node {

    constructor() {
      super('Enemy');

      this.addComponent(new ƒ.ComponentTransform);
      this.addComponent(new ƒ.ComponentMaterial(new ƒ.Material("Blue", ƒ.ShaderUniColor, new ƒ.CoatColored(new ƒ.Color(0, 0, 1, 1)))));
      this.addComponent(new ƒ.ComponentMesh(new ƒ.MeshCube));
      this.cmpTransform.local.translate(new ƒ.Vector3((Math.floor(Math.random() * 6) - 3), 0, (Math.floor(Math.random() * 6) - 3)));
      this.getComponent(ƒ.ComponentMesh).pivot.scale(new ƒ.Vector3(0.5, 0.5, 0.5));
    }
  }
}