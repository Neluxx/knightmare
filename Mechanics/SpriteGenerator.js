"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    var ƒAid = FudgeAid;
    class SpriteGenerator extends ƒAid.NodeSprite {
        static generateAnimations(_spritesheet) {
            SpriteGenerator.animations = {};
            let sprite;
            let rect;
            //Player IDLE
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_IDLE, _spritesheet);
            rect = new ƒ.Rectangle(0, 29, 26, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_IDLE] = sprite;
            //Player WALK
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_WALK, _spritesheet);
            rect = new ƒ.Rectangle(0, 60, 30, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_WALK] = sprite;
            //Player ATTACK
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_ATTACK, _spritesheet);
            rect = new ƒ.Rectangle(0, 92, 51, 32, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 20, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_ATTACK] = sprite;
            //Player DIE
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_DIE, _spritesheet);
            rect = new ƒ.Rectangle(0, 123, 29, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_DIE] = sprite;
            //Player DEAD
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_DEAD, _spritesheet);
            rect = new ƒ.Rectangle(406, 123, 29, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.PLAYER_DEAD] = sprite;
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
            //Bat DIE
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.BAT_DIE, _spritesheet);
            rect = new ƒ.Rectangle(0, 242, 60, 22, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 10, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.BAT_DIE] = sprite;
            //Bat DEAD
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.BAT_DEAD, _spritesheet);
            rect = new ƒ.Rectangle(540, 242, 60, 22, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 1, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.BAT_DEAD] = sprite;
            //Wolf IDLE
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.WOLF_IDLE, _spritesheet);
            rect = new ƒ.Rectangle(14, 266, 36, 24, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 12, new ƒ.Vector2(28, 0), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.ACTION.WOLF_IDLE] = sprite;
        }
        static generateTileset(_spritesheet) {
            SpriteGenerator.tileset = {};
            let sprite;
            let rect;
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