"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    var ƒAid = FudgeAid;
    class SpriteGenerator extends ƒAid.NodeSprite {
        static generateSprites(_spritesheet) {
            SpriteGenerator.animations = {};
            let sprite;
            let rect;
            //Player IDLE
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_IDLE, _spritesheet);
            rect = new ƒ.Rectangle(0, 30, 26, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_IDLE] = sprite;
            //Player WALK
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_WALK, _spritesheet);
            rect = new ƒ.Rectangle(0, 60, 30, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_WALK] = sprite;
            //Player ATTACK
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_ATTACK, _spritesheet);
            rect = new ƒ.Rectangle(0, 93, 51, 33, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 20, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_ATTACK] = sprite;
            //Player DEATH
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_DEATH, _spritesheet);
            rect = new ƒ.Rectangle(0, 123, 29, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_DEATH] = sprite;
            //Player JUMP
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_JUMP, _spritesheet);
            rect = new ƒ.Rectangle(104, 166, 26, 43, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_JUMP] = sprite;
            //Bat WALK
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.BAT_WALK, _spritesheet);
            rect = new ƒ.Rectangle(0, 193, 38, 27, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.BAT_WALK] = sprite;
            //Bat ATTACK
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.BAT_ATTACK, _spritesheet);
            rect = new ƒ.Rectangle(0, 220, 37, 27, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 10, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.BAT_ATTACK] = sprite;
            //Bat DEATH
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.BAT_DEATH, _spritesheet);
            rect = new ƒ.Rectangle(0, 242, 60, 22, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 10, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.BAT_DEATH] = sprite;
            //Wolf IDLE
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.WOLF_IDLE, _spritesheet);
            rect = new ƒ.Rectangle(14, 266, 36, 24, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 12, new ƒ.Vector2(28, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.WOLF_IDLE] = sprite;
        }
        static getTextureMaterial(name, img) {
            let coatTxt = new ƒ.CoatTextured();
            coatTxt.texture = new ƒ.TextureImage();
            coatTxt.texture.image = img;
            return new ƒ.Material(name, ƒ.ShaderTexture, coatTxt);
        }
    }
    Game.SpriteGenerator = SpriteGenerator;
})(Game || (Game = {}));
//# sourceMappingURL=SpriteGenerator.js.map