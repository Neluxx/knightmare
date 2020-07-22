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
            //Player WALK
            sprite = new ƒAid.SpriteSheetAnimation(Game.PLAYER_ACTION.WALK, _spritesheet);
            rect = new ƒ.Rectangle(0, 30, 18, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 8, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.PLAYER_ACTION.WALK] = sprite;
            //Player IDLE
            sprite = new ƒAid.SpriteSheetAnimation(Game.PLAYER_ACTION.IDLE, _spritesheet);
            rect = new ƒ.Rectangle(0, 60, 25, 30, ƒ.ORIGIN2D.BOTTOMLEFT);
            sprite.generateByGrid(rect, 15, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMLEFT);
            SpriteGenerator.animations[Game.PLAYER_ACTION.IDLE] = sprite;
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