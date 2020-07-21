"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒAid = FudgeAid;
    let viewport;
    let player;
    window.addEventListener("load", init);
    function init() {
        let canvas = document.querySelector("canvas");
        //find spritesheet and generate Sprites
        let img = document.querySelector("img");
        let spritesheet = Game.ƒAid.createSpriteSheet("spritesheet", img);
        Game.SpriteGenerator.generateSprites(spritesheet);
        //create Game
        Game.game = new Game.ƒ.Node("Game");
        player = new Game.Player("Player");
        Game.level = Game.Level.createLevel();
        Game.game.appendChild(Game.level);
        Game.game.appendChild(player);
        //create Camera
        let cmpCamera = new Game.ƒ.ComponentCamera();
        cmpCamera.pivot.translateZ(10);
        cmpCamera.pivot.lookAt(Game.ƒ.Vector3.ZERO());
        cmpCamera.backgroundColor = Game.ƒ.Color.CSS("white");
        //create Viewport
        viewport = new Game.ƒ.Viewport();
        viewport.initialize("Viewport", Game.game, cmpCamera, canvas);
        viewport.draw();
        //add EventListener
        viewport.addEventListener("\u0192keydown" /* DOWN */, handleKeyboard);
        viewport.activateKeyboardEvent("\u0192keydown" /* DOWN */, true);
        viewport.setFocus(true);
        //start Loop
        Game.ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        Game.ƒ.Loop.start(Game.ƒ.LOOP_MODE.TIME_GAME, 60);
    }
    function update(_event) {
        handleInput();
        viewport.draw();
    }
    function handleKeyboard(_event) {
        //handle KeyBoard Input
        if (_event.code == Game.ƒ.KEYBOARD_CODE.SPACE) {
            player.act(Game.ACTION.PLAYER_JUMP);
        }
    }
    function handleInput() {
        //handle KeyBoard Input
        if (Game.ƒ.Keyboard.isPressedOne([Game.ƒ.KEYBOARD_CODE.A, Game.ƒ.KEYBOARD_CODE.ARROW_LEFT])) {
            player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.LEFT);
        }
        else if (Game.ƒ.Keyboard.isPressedOne([Game.ƒ.KEYBOARD_CODE.D, Game.ƒ.KEYBOARD_CODE.ARROW_RIGHT])) {
            player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.RIGHT);
        }
        else {
            player.act(Game.ACTION.PLAYER_IDLE);
        }
    }
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map