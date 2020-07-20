"use strict";
var Game;
(function (Game) {
    class Collider {
        static checkCollision(object) {
            for (let element of Game.level.getChildren()) {
                let rect = element.getRectWorld();
                let hit = rect.isInside(object.cmpTransform.local.translation.toVector2());
                if (hit) {
                    return true;
                }
            }
            return false;
        }
    }
    Game.Collider = Collider;
})(Game || (Game = {}));
//# sourceMappingURL=Collider.js.map