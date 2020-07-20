"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Element extends Game.Level {
        constructor() {
            super();
            this.addComponent(new ƒ.ComponentTransform());
            this.addComponent(new ƒ.ComponentMaterial(Element.material));
            let cmpMesh = new ƒ.ComponentMesh(Element.mesh);
            cmpMesh.pivot = Element.pivot;
            this.addComponent(cmpMesh);
        }
        getRectWorld() {
            let rect = ƒ.Rectangle.GET(0, 0, 100, 100);
            let topleft = new ƒ.Vector3(-0.5, 0.5, 0);
            let bottomright = new ƒ.Vector3(0.5, -0.5, 0);
            let mtxResult = ƒ.Matrix4x4.MULTIPLICATION(this.mtxWorld, Element.pivot);
            topleft.transform(mtxResult, true);
            bottomright.transform(mtxResult, true);
            let size = new ƒ.Vector2(bottomright.x - topleft.x, bottomright.y - topleft.y);
            rect.position = topleft.toVector2();
            rect.size = size;
            return rect;
        }
    }
    Element.mesh = new ƒ.MeshSprite();
    Element.material = new ƒ.Material("Element", ƒ.ShaderUniColor, new ƒ.CoatColored(ƒ.Color.CSS("green")));
    Element.pivot = ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.Y(-0.5));
    Game.Element = Element;
})(Game || (Game = {}));
//# sourceMappingURL=Element.js.map