"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    var ƒAid = FudgeAid;
    class Character extends ƒAid.NodeSprite {
        constructor() {
            super("Character");
            this.speed = ƒ.Vector3.ZERO();
        }
    }
    Character.speedMax = new ƒ.Vector2(1.5, 5); //units per second
    Character.gravity = ƒ.Vector2.Y(-3);
    Game.Character = Character;
    let ACTION;
    (function (ACTION) {
        ACTION["PLAYER_IDLE"] = "Player_Idle";
        ACTION["PLAYER_WALK"] = "Player_Walk";
        ACTION["PLAYER_ATTACK"] = "Player_Attack";
        ACTION["PLAYER_DEATH"] = "Player_Death";
        ACTION["PLAYER_JUMP"] = "Player_Jump";
        ACTION["BAT_WALK"] = "Bat_Walk";
        ACTION["BAT_ATTACK"] = "Bat_Attack";
        ACTION["BAT_DEATH"] = "Bat_Death";
        ACTION["WOLF_IDLE"] = "Wolf_Idle";
        ACTION["WOLF_WALK"] = "Wolf_Walk";
        ACTION["WOLF_ATTACK"] = "Wolf_Attack";
        ACTION["WOLF_DEATH"] = "Wolf_Death";
        ACTION["WITCH_IDLE"] = "Witch_Idle";
        ACTION["WITCH_WALK"] = "Witch_Walk";
        ACTION["WITCH_ATTACK"] = "Witch_Attack";
        ACTION["WITCH_DEATH"] = "Witch_Death";
        ACTION["GOLEM_IDLE"] = "Golem_Idle";
        ACTION["GOLEM_WALK"] = "Golem_Walk";
        ACTION["GOLEM_ATTACK"] = "Golem_Attack";
        ACTION["GOLEM_DEATH"] = "Golem_Death";
    })(ACTION = Game.ACTION || (Game.ACTION = {}));
    let DIRECTION;
    (function (DIRECTION) {
        DIRECTION[DIRECTION["LEFT"] = 0] = "LEFT";
        DIRECTION[DIRECTION["RIGHT"] = 1] = "RIGHT";
    })(DIRECTION = Game.DIRECTION || (Game.DIRECTION = {}));
})(Game || (Game = {}));
//# sourceMappingURL=Character.js.map