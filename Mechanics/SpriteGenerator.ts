namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class SpriteGenerator extends ƒAid.NodeSprite {
    public static animations: ƒAid.SpriteSheetAnimations;

    public static generateSprites(_spritesheet: ƒ.CoatTextured): void {
      SpriteGenerator.animations = {};
      let sprite: ƒAid.SpriteSheetAnimation;
      let rect: ƒ.Rectangle;
      
      //Player IDLE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_IDLE, _spritesheet);
      rect = new ƒ.Rectangle(0, 30, 26, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_IDLE] = sprite;

      //Player WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 60, 30, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_WALK] = sprite;

      //Player ATTACK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_ATTACK, _spritesheet);
      rect = new ƒ.Rectangle(0, 93, 51, 33, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 20, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_ATTACK] = sprite;

      //Player DEATH
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_DEATH, _spritesheet);
      rect = new ƒ.Rectangle(0, 123, 29, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_DEATH] = sprite;

      //Player JUMP
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_JUMP, _spritesheet);
      rect = new ƒ.Rectangle(104, 166, 26, 43, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_JUMP] = sprite;

      //Bat WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.BAT_WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 193, 38, 27, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.BAT_WALK] = sprite;

      //Bat ATTACK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.BAT_ATTACK, _spritesheet);
      rect = new ƒ.Rectangle(0, 220, 37, 27, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 10, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.BAT_ATTACK] = sprite;

      //Bat DEATH
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.BAT_DEATH, _spritesheet);
      rect = new ƒ.Rectangle(0, 242, 60, 22, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 10, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.BAT_DEATH] = sprite;
    }

    public static getTextureMaterial(name: string, img: HTMLImageElement): ƒ.Material {
      let coatTxt: ƒ.CoatTextured = new ƒ.CoatTextured();
      coatTxt.texture = new ƒ.TextureImage();
      coatTxt.texture.image = img;
      return new ƒ.Material(name, ƒ.ShaderTexture, coatTxt);
    }
  }
}