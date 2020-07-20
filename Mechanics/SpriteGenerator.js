"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    var ƒAid = FudgeAid;
    class SpriteGenerator extends ƒAid.NodeSprite {
        static generateSprites(_spritesheet) {
            SpriteGenerator.animations = {};
            let sprite;
            //Player WALK
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_WALK, _spritesheet);
            sprite.generateByGrid(ƒ.Rectangle.GET(2, 104, 68, 64), 6, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
            SpriteGenerator.animations[Game.ACTION.PLAYER_WALK] = sprite;
            //Player IDLE
            sprite = new ƒAid.SpriteSheetAnimation(Game.ACTION.PLAYER_IDLE, _spritesheet);
            sprite.generateByGrid(ƒ.Rectangle.GET(8, 20, 45, 72), 4, ƒ.Vector2.ZERO(), 64, ƒ.ORIGIN2D.BOTTOMCENTER);
            SpriteGenerator.animations[Game.ACTION.PLAYER_IDLE] = sprite;
            sprite.frames[2].timeScale = 10;
        }
    }
    Game.SpriteGenerator = SpriteGenerator;
})(Game || (Game = {}));
//# sourceMappingURL=SpriteGenerator.js.map