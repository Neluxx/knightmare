"use strict";
var Game;
(function (Game) {
    class Enemy extends Game.Character {
        moveLeft = true;
        constructor() {
            super();
        }
    }
    Game.Enemy = Enemy;
})(Game || (Game = {}));
//# sourceMappingURL=Enemy.js.map