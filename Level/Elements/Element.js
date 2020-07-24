"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Element extends Game.Level {
        constructor() {
            super();
            this.pivot = ƒ.Matrix4x4.TRANSLATION(new ƒ.Vector3(0.5, 0.25, 0));
            this.addComponent(new ƒ.ComponentTransform());
            this.setAnimation(Game.SpriteGenerator.tileset["01"]);
        }
        getRectElement() {
            let rect = ƒ.Rectangle.GET(0, 0, 100, 100);
            let topleft = new ƒ.Vector3(-0.5, 0.5, 0);
            let bottomright = new ƒ.Vector3(0.5, -0.5, 0);
            let mtxResult = ƒ.Matrix4x4.MULTIPLICATION(this.mtxWorld, this.pivot);
            topleft.transform(mtxResult, true);
            bottomright.transform(mtxResult, true);
            let size = new ƒ.Vector2(bottomright.x - topleft.x, bottomright.y - topleft.y);
            rect.position = topleft.toVector2();
            rect.size = size;
            return rect;
        }
    }
    Game.Element = Element;
})(Game || (Game = {}));
//# sourceMappingURL=Element.js.map