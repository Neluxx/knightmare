"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒAid = FudgeAid;
    Game.gameOver = false;
    Game.isAttacking = false;
    let viewport;
    let bg;
    window.addEventListener("load", init);
    function init() {
        let canvas = document.querySelector("canvas");
        Game.data = new Game.ExternalData();
        Game.data.loadJSON();
        //find spritesheet and generate Sprites
        let img = document.querySelector("#spritesheet");
        let spritesheet = Game.ƒAid.createSpriteSheet("Spritesheet", img);
        Game.SpriteGenerator.generateAnimations(spritesheet);
        img = document.querySelector("#tileset");
        spritesheet = Game.ƒAid.createSpriteSheet("Tileset", img);
        Game.SpriteGenerator.generateTileset(spritesheet);
        //create Game
        Game.game = new Game.ƒ.Node("Game");
        Game.player = new Game.Player();
        Game.level = Game.Level.createLevel();
        Game.enemies = Game.Level.createEnemies();
        bg = Game.Level.createBackground();
        Game.game.appendChild(Game.level);
        Game.game.appendChild(Game.player);
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
        //check if game over
        if (Game.gameOver) {
            Game.player.act(Game.ACTION.PLAYER_DIE);
        }
        //check if any Key is active
        if (!Game.ƒ.Keyboard.isPressedOne([Game.ƒ.KEYBOARD_CODE.W, Game.ƒ.KEYBOARD_CODE.ARROW_UP, Game.ƒ.KEYBOARD_CODE.A, Game.ƒ.KEYBOARD_CODE.ARROW_LEFT, Game.ƒ.KEYBOARD_CODE.D, Game.ƒ.KEYBOARD_CODE.ARROW_RIGHT, Game.ƒ.KEYBOARD_CODE.SPACE]) && !Game.gameOver) {
            Game.player.act(Game.ACTION.PLAYER_IDLE);
            Game.isAttacking = false;
        }
        //camera movement
        Game.camera.cmpTransform.local.translation = Game.player.cmpTransform.local.translation;
        Game.camera.cmpTransform.local.translateY(1.5);
        bg.cmpTransform.local.translation = Game.player.cmpTransform.local.translation;
        bg.cmpTransform.local.translateY(0.25);
        viewport.draw();
    }
    function handleKeyboard(_event) {
        if (!Game.gameOver) {
            switch (_event.code) {
                case (Game.ƒ.KEYBOARD_CODE.W):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_UP):
                    Game.player.act(Game.ACTION.PLAYER_JUMP);
                    Game.isAttacking = false;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.A):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_LEFT):
                    Game.player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.LEFT);
                    Game.isAttacking = false;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.D):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_RIGHT):
                    Game.player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.RIGHT);
                    Game.isAttacking = false;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.S):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_DOWN):
                    //shield
                    //player.act(ACTION.PLAYER_SHIELD);
                    //isAttacking = false;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.SPACE):
                    Game.player.act(Game.ACTION.PLAYER_ATTACK);
                    Game.isAttacking = true;
                    break;
            }
        }
    }
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map