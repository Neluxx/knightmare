"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Character extends Game.ƒAid.NodeSprite {
        constructor() {
            super("Character");
            this.speed = ƒ.Vector3.ZERO();
        }
    }
    Character.speedMax = new ƒ.Vector2(1.5, 5); //units per second
    Character.gravity = ƒ.Vector2.Y(-3);
    Game.Character = Character;
    let PLAYER_ACTION;
    (function (PLAYER_ACTION) {
        PLAYER_ACTION["IDLE"] = "Idle";
        PLAYER_ACTION["WALK"] = "Walk";
        //ATTACK = "Attack",
        //DEATH = "Death",
        //ROLL = "Roll",          //necessary?
        //SHIELD = "Shield",      //necessary?
        PLAYER_ACTION["JUMP"] = "Jump";
    })(PLAYER_ACTION = Game.PLAYER_ACTION || (Game.PLAYER_ACTION = {}));
    let BAT_ACTION;
    (function (BAT_ACTION) {
        BAT_ACTION["WALK"] = "Walk";
        BAT_ACTION["ATTACK"] = "Attack";
        BAT_ACTION["DEATH"] = "Death";
    })(BAT_ACTION = Game.BAT_ACTION || (Game.BAT_ACTION = {}));
    let WOLF_ACTION;
    (function (WOLF_ACTION) {
        WOLF_ACTION["IDLE"] = "Idle";
        WOLF_ACTION["WALK"] = "Walk";
        WOLF_ACTION["ATTACK"] = "Attack";
        WOLF_ACTION["DEATH"] = "Death";
    })(WOLF_ACTION = Game.WOLF_ACTION || (Game.WOLF_ACTION = {}));
    let WITCH_ACTION;
    (function (WITCH_ACTION) {
        WITCH_ACTION["IDLE"] = "Idle";
        WITCH_ACTION["WALK"] = "Walk";
        WITCH_ACTION["ATTACK"] = "Attack";
        WITCH_ACTION["DEATH"] = "Death";
    })(WITCH_ACTION = Game.WITCH_ACTION || (Game.WITCH_ACTION = {}));
    let GOLEM_ACTION;
    (function (GOLEM_ACTION) {
        GOLEM_ACTION["IDLE"] = "Idle";
        //IDLE_EXTRA = "Idle Extra",
        GOLEM_ACTION["WALK"] = "Walk";
        GOLEM_ACTION["ATTACK"] = "Attack";
        GOLEM_ACTION["DEATH"] = "Death";
    })(GOLEM_ACTION = Game.GOLEM_ACTION || (Game.GOLEM_ACTION = {}));
    let DIRECTION;
    (function (DIRECTION) {
        DIRECTION[DIRECTION["LEFT"] = 0] = "LEFT";
        DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
    })(DIRECTION = Game.DIRECTION || (Game.DIRECTION = {}));
})(Game || (Game = {}));
//# sourceMappingURL=Character.js.map