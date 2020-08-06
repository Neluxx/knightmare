"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    var ƒAid = FudgeAid;
    class Heart extends ƒAid.NodeSprite {
        constructor() {
            super("Heart");
            this.addComponent(new ƒ.ComponentTransform());
            this.setAnimation(Game.SpriteGenerator.hearts["Heart_Full"]);
        }
    }
    Game.Heart = Heart;
})(Game || (Game = {}));
//# sourceMappingURL=Heart.js.map