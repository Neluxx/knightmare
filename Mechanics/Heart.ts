namespace Game {
  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class Heart extends ƒAid.NodeSprite {

    public constructor() {
      super("Heart");
      this.addComponent(new ƒ.ComponentTransform());
      this.setAnimation(<ƒAid.SpriteSheetAnimation>SpriteGenerator.hearts["Heart_Full"]);
    }
  }
}