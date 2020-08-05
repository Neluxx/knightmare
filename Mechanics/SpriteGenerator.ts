namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class SpriteGenerator extends ƒAid.NodeSprite {
    public static animations: ƒAid.SpriteSheetAnimations;
    public static tileset: ƒAid.SpriteSheetAnimations;

    public static generateAnimations(_spritesheet: ƒ.CoatTextured): void {
      SpriteGenerator.animations = {};
      let sprite: ƒAid.SpriteSheetAnimation;
      let rect: ƒ.Rectangle;
      
      //Player IDLE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_IDLE, _spritesheet);
      rect = new ƒ.Rectangle(0, 30, 26, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 15, new ƒ.Vector2(38, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_IDLE] = sprite;

      //Player WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 64, 30, 34, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, new ƒ.Vector2(66, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_WALK] = sprite;
       
      //Player DIE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_DIE, _spritesheet);
      rect = new ƒ.Rectangle(0, 94, 29, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 15, new ƒ.Vector2(67, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_DIE] = sprite;

      //Player DEAD
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_DEAD, _spritesheet);
      rect = new ƒ.Rectangle(1344, 94, 29, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 1, new ƒ.Vector2(67, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_DEAD] = sprite;

      //Player BLOCK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_SHIELD, _spritesheet);
      rect = new ƒ.Rectangle(0, 124, 26, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 7, new ƒ.Vector2(70, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_SHIELD] = sprite;

      //Player ATTACK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.PLAYER_ATTACK, _spritesheet);
      rect = new ƒ.Rectangle(0, 157, 51, 33, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 20, new ƒ.Vector2(0, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.PLAYER_ATTACK] = sprite;

      //Bat DIE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.BAT_DIE, _spritesheet);
      rect = new ƒ.Rectangle(0, 186, 60, 29, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 10, new ƒ.Vector2(3, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.BAT_DIE] = sprite;

      //Bat DEAD
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.BAT_DEAD, _spritesheet);
      rect = new ƒ.Rectangle(567, 186, 60, 29, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 1, new ƒ.Vector2(3, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.BAT_DEAD] = sprite;

      //Bat WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.BAT_WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 215, 38, 29, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, new ƒ.Vector2(26, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.BAT_WALK] = sprite;

      //Bat ATTACK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.BAT_ATTACK, _spritesheet);
      rect = new ƒ.Rectangle(0, 244, 39, 29, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 10, new ƒ.Vector2(25, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.BAT_ATTACK] = sprite;

      //Golem ATTACK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.GOLEM_ATTACK, _spritesheet);
      rect = new ƒ.Rectangle(0, 282, 70, 38, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 16, new ƒ.Vector2(10, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.GOLEM_ATTACK] = sprite;

      //Golem DIE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.GOLEM_DIE, _spritesheet);
      rect = new ƒ.Rectangle(0, 320, 35, 38, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 28, new ƒ.Vector2(29, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.GOLEM_DIE] = sprite;

      //Golem DEAD
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.GOLEM_DEAD, _spritesheet);
      rect = new ƒ.Rectangle(1728, 320, 35, 38, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 1, new ƒ.Vector2(29, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.GOLEM_DEAD] = sprite;

      //Golem IDLE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.GOLEM_IDLE, _spritesheet);
      rect = new ƒ.Rectangle(0, 398, 38, 40, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 12, new ƒ.Vector2(26, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.GOLEM_IDLE] = sprite;

      //Golem WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.GOLEM_WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 436, 34, 38, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 7, new ƒ.Vector2(30, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.GOLEM_WALK] = sprite;

      //Witch IDLE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WITCH_IDLE, _spritesheet);
      rect = new ƒ.Rectangle(0, 467, 21, 31, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 7, new ƒ.Vector2(43, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WITCH_IDLE] = sprite;

      //Witch DIE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WITCH_DIE, _spritesheet);
      rect = new ƒ.Rectangle(0, 497, 53, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 12, new ƒ.Vector2(11, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WITCH_DIE] = sprite;

      //Witch DEAD
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WITCH_DEAD, _spritesheet);
      rect = new ƒ.Rectangle(506, 497, 53, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 1, new ƒ.Vector2(11, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WITCH_DEAD] = sprite;

      //Witch WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WITCH_WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 527, 19, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, new ƒ.Vector2(45, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WITCH_WALK] = sprite;

      //Witch ATTACK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WITCH_ATTACK, _spritesheet);
      rect = new ƒ.Rectangle(0, 559, 45, 32, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 18, new ƒ.Vector2(19, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WITCH_ATTACK] = sprite;

      //Wolf WALK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WOLF_WALK, _spritesheet);
      rect = new ƒ.Rectangle(0, 580, 41, 21, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 8, new ƒ.Vector2(23, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WOLF_WALK] = sprite;

      //Wolf DIE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WOLF_DIE, _spritesheet);
      rect = new ƒ.Rectangle(0, 611, 56, 32, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 18, new ƒ.Vector2(8, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WOLF_DIE] = sprite;

      //Wolf DEAD
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WOLF_DEAD, _spritesheet);
      rect = new ƒ.Rectangle(1088, 611, 56, 32, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 1, new ƒ.Vector2(8, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WOLF_DEAD] = sprite;

      //Wolf IDLE
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WOLF_IDLE, _spritesheet);
      rect = new ƒ.Rectangle(0, 635, 35, 24, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 12, new ƒ.Vector2(29, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WOLF_IDLE] = sprite;

      //Wolf ATTACK
      sprite = new ƒAid.SpriteSheetAnimation(ACTION.WOLF_ATTACK, _spritesheet);
      rect = new ƒ.Rectangle(0, 658, 47, 24, ƒ.ORIGIN2D.BOTTOMLEFT);
      sprite.generateByGrid(rect, 16, new ƒ.Vector2(17, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
      SpriteGenerator.animations[ACTION.WOLF_ATTACK] = sprite;
    }

    public static generateTileset(_spritesheet: ƒ.CoatTextured): void {
      SpriteGenerator.tileset = {};
      let sprite: ƒAid.SpriteSheetAnimation;
      let rect: ƒ.Rectangle;
      
      //Grass Top Left
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Top_Left", _spritesheet);
      rect = new ƒ.Rectangle(20, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Top_Left"] = sprite;

      //Grass Top
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Top", _spritesheet);
      rect = new ƒ.Rectangle(60, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Top"] = sprite;

      //Grass Top Right
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Top_Right", _spritesheet);
      rect = new ƒ.Rectangle(100, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Top_Right"] = sprite;

      //Grass Left
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Left", _spritesheet);
      rect = new ƒ.Rectangle(140, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Left"] = sprite;

      //Dirt All
      sprite = new ƒAid.SpriteSheetAnimation("Dirt_All", _spritesheet);
      rect = new ƒ.Rectangle(180, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Dirt_All"] = sprite;

      //Grass Right
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Right", _spritesheet);
      rect = new ƒ.Rectangle(220, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Right"] = sprite;

      //Corner Top Left
      sprite = new ƒAid.SpriteSheetAnimation("Corner_Top_Left", _spritesheet);
      rect = new ƒ.Rectangle(260, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Corner_Top_Left"] = sprite;

      //Corner Top Right
      sprite = new ƒAid.SpriteSheetAnimation("Corner_Top_Right", _spritesheet);
      rect = new ƒ.Rectangle(300, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Corner_Top_Right"] = sprite;

      //Grass Top Down
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Top_Down", _spritesheet);
      rect = new ƒ.Rectangle(340, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Top_Down"] = sprite;

      //Grass Top Down Left
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Top_Down_Left", _spritesheet);
      rect = new ƒ.Rectangle(380, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Top_Down_Left"] = sprite;

      //Grass Top Down Right
      sprite = new ƒAid.SpriteSheetAnimation("Grass_Top_Down_Right", _spritesheet);
      rect = new ƒ.Rectangle(420, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_Top_Down_Right"] = sprite;

      //Grass All
      sprite = new ƒAid.SpriteSheetAnimation("Grass_All", _spritesheet);
      rect = new ƒ.Rectangle(460, 52, 40, 52, ƒ.ORIGIN2D.BOTTOMCENTER);
      sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
      SpriteGenerator.tileset["Grass_All"] = sprite;
    }

    public static getTextureMaterial(name: string, img: HTMLImageElement): ƒ.Material {
      let coatTxt: ƒ.CoatTextured = new ƒ.CoatTextured();
      coatTxt.texture = new ƒ.TextureImage();
      coatTxt.texture.image = img;
      return new ƒ.Material(name, ƒ.ShaderTexture, coatTxt);
    }
  }
}