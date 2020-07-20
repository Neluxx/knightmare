"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    let ACTION;
    (function (ACTION) {
        ACTION["PLAYER_IDLE"] = "Player Idle";
        ACTION["PLAYER_WALK"] = "Player Walk";
        ACTION["PLAYER_JUMP"] = "Player Jump";
    })(ACTION = Game.ACTION || (Game.ACTION = {}));
    let DIRECTION;
    (function (DIRECTION) {
        DIRECTION[DIRECTION["LEFT"] = 0] = "LEFT";
        DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
    })(DIRECTION = Game.DIRECTION || (Game.DIRECTION = {}));
    class Character extends ƒ.Node {
    }
    Game.Character = Character;
})(Game || (Game = {}));
//# sourceMappingURL=Character.js.map