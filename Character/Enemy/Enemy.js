"use strict";
var Game;
(function (Game) {
    class Enemy extends Game.Character {
        constructor() {
            super();
            this.moveLeft = true;
        }
    }
    Game.Enemy = Enemy;
})(Game || (Game = {}));
//# sourceMappingURL=Enemy.js.map