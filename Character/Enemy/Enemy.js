"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Enemy extends Game.Character {
        constructor() {
            super();
            this.addComponent(new ƒ.ComponentTransform());
        }
    }
    Game.Enemy = Enemy;
})(Game || (Game = {}));
//# sourceMappingURL=Enemy.js.map