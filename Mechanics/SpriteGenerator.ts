namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class SpriteGenerator extends ƒAid.NodeSprite {
    public static animations: ƒAid.SpriteSheetAnimations;

    public static generateSprites(_spritesheet: ƒ.CoatTextured): void {
      SpriteGenerator.animations = {};
      let sprite: ƒAid.SpriteSheetAnimation;
      let rect: ƒ.Rectangle;

      //Player WALK
      sprite = new ƒAid.SpriteSheetAnimation(PLAYER_ACTION.WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 30, 18, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[PLAYER_ACTION.WALK] = sprite;

      //Player IDLE
      sprite = new ƒAid.SpriteSheetAnimation(PLAYER_ACTION.IDLE, _spritesheet);
      rect = new ƒ.Rectangle(0, 60, 25, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[PLAYER_ACTION.IDLE] = sprite;
    }

    public static getTextureMaterial(name: string, img: HTMLImageElement): ƒ.Material {
      let coatTxt: ƒ.CoatTextured = new ƒ.CoatTextured();
      coatTxt.texture = new ƒ.TextureImage();
      coatTxt.texture.image = img;
      return new ƒ.Material(name, ƒ.ShaderTexture, coatTxt);
    }
  }
}