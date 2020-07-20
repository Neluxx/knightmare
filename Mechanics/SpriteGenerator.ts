namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class SpriteGenerator extends ƒAid.NodeSprite {
    public static animations: ƒAid.SpriteSheetAnimations;

    public static generateSprites(_spritesheet: ƒ.CoatTextured): void {
      SpriteGenerator.animations = {};
      let sprite: ƒAid.SpriteSheetAnimation

      //Player WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_WALK, _spritesheet);
      sprite.generateByGrid(ƒ.Rectangle.GET(2, 104, 68, 64), 6, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.animations[ACTION.PLAYER_WALK] = sprite;

      //Player IDLE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_IDLE, _spritesheet);
      sprite.generateByGrid(ƒ.Rectangle.GET(8, 20, 45, 72), 4, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.animations[ACTION.PLAYER_IDLE] = sprite;
      
      sprite.frames[2].timeScale = 10;
    }
  }
}