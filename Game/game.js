"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒAid = FudgeAid;
    let viewport;
    let player;
    let bg;
    window.addEventListener("load", init);
    function init() {
        let canvas = document.querySelector("canvas");
        //find spritesheet and generate Sprites
        let img = document.querySelector("#spritesheet");
        let spritesheet = Game.ƒAid.createSpriteSheet("Spritesheet", img);
        Game.SpriteGenerator.generateSprites(spritesheet);
        //create Game
        Game.game = new Game.ƒ.Node("Game");
        player = new Game.Player();
        Game.level = Game.Level.createLevel();
        Game.enemies = Game.Level.createEnemies();
        bg = Game.Level.createBackground();
        Game.game.appendChild(Game.level);
        Game.game.appendChild(player);
        Game.game.appendChild(Game.enemies);
        Game.game.appendChild(bg);
        //create Camera
        let cmpCamera = new Game.ƒ.ComponentCamera();
        cmpCamera.pivot.translateZ(10);
        cmpCamera.pivot.lookAt(Game.ƒ.Vector3.ZERO());
        cmpCamera.backgroundColor = Game.ƒ.Color.CSS("white");
        Game.camera = new Game.ƒ.Node("Camera");
        Game.camera.addComponent(new Game.ƒ.ComponentTransform());
        Game.camera.addComponent(cmpCamera);
        Game.game.appendChild(Game.camera);
        //create Viewport
        viewport = new Game.ƒ.Viewport();
        viewport.initialize("Viewport", Game.game, Game.camera.getComponent(Game.ƒ.ComponentCamera), canvas);
        viewport.draw();
        //add EventListener
        viewport.addEventListener("\u0192keydown" /* DOWN */, handleKeyboard);
        viewport.activateKeyboardEvent("\u0192keydown" /* DOWN */, true);
        viewport.setFocus(true);
        //start Loop
        Game.ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        Game.ƒ.Loop.start(Game.ƒ.LOOP_MODE.TIME_GAME, 60);
    }
    function update() {
        //camera movement
        Game.camera.cmpTransform.local.translation = player.cmpTransform.local.translation;
        //check if any Key is active
        if (!Game.ƒ.Keyboard.isPressedOne([Game.ƒ.KEYBOARD_CODE.W, Game.ƒ.KEYBOARD_CODE.ARROW_UP, Game.ƒ.KEYBOARD_CODE.A, Game.ƒ.KEYBOARD_CODE.ARROW_LEFT, Game.ƒ.KEYBOARD_CODE.D, Game.ƒ.KEYBOARD_CODE.ARROW_RIGHT, Game.ƒ.KEYBOARD_CODE.SPACE]))
            player.act(Game.ACTION.PLAYER_IDLE);
        viewport.draw();
    }
    function handleKeyboard(_event) {
        switch (_event.code) {
            case (Game.ƒ.KEYBOARD_CODE.W):
            case (Game.ƒ.KEYBOARD_CODE.ARROW_UP):
                player.act(Game.ACTION.PLAYER_JUMP);
                break;
            case (Game.ƒ.KEYBOARD_CODE.A):
            case (Game.ƒ.KEYBOARD_CODE.ARROW_LEFT):
                player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.LEFT);
                break;
            case (Game.ƒ.KEYBOARD_CODE.D):
            case (Game.ƒ.KEYBOARD_CODE.ARROW_RIGHT):
                player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.RIGHT);
                break;
            case (Game.ƒ.KEYBOARD_CODE.S):
            case (Game.ƒ.KEYBOARD_CODE.ARROW_DOWN):
                //shield
                //player.act(ACTION.PLAYER_SHIELD);
                break;
            case (Game.ƒ.KEYBOARD_CODE.SPACE):
                player.act(Game.ACTION.PLAYER_ATTACK);
                break;
        }
    }
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map