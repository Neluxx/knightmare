"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Character extends ƒ.Node {
        constructor() {
            super("Character");
        }
    }
    Game.Character = Character;
    let ACTION;
    (function (ACTION) {
        ACTION["IDLE"] = "Idle";
        ACTION["WALK"] = "Walk";
        ACTION["JUMP"] = "Jump";
    })(ACTION = Game.ACTION || (Game.ACTION = {}));
    let DIRECTION;
    (function (DIRECTION) {
        DIRECTION[DIRECTION["LEFT"] = 0] = "LEFT";
        DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
    })(DIRECTION = Game.DIRECTION || (Game.DIRECTION = {}));
})(Game || (Game = {}));
//# sourceMappingURL=Character.js.map