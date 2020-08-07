"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒAid = FudgeAid;
    Game.gameOver = false;
    Game.isAttacking = false;
    Game.isBlocking = false;
    Game.hearts = new Array();
    window.addEventListener("load", init);
    async function init() {
        let canvas = document.querySelector("canvas");
        document.getElementById("playButton").addEventListener("click", startGame);
        document.getElementById("gameover").style.visibility = "hidden";
        //load data
        Game.data = await Game.loadJSON();
        //find spritesheet and generate Sprites
        let img = document.querySelector("#spritesheet");
        let spritesheet = Game.ƒAid.createSpriteSheet("Spritesheet", img);
        Game.SpriteGenerator.generateAnimations(spritesheet);
        img = document.querySelector("#tileset");
        spritesheet = Game.ƒAid.createSpriteSheet("Tileset", img);
        Game.SpriteGenerator.generateTileset(spritesheet);
        img = document.querySelector("#hearts");
        spritesheet = Game.ƒAid.createSpriteSheet("Heartsheet", img);
        Game.SpriteGenerator.generateHearts(spritesheet);
        //create Game
        Game.game = new Game.ƒ.Node("Game");
        Game.player = new Game.Player();
        Game.level = Game.Level.createLevel();
        Game.enemies = Game.Level.createEnemies();
        Game.bg = Game.Level.createBackground();
        //create Healthbar
        for (let i = 0; i < 10; i++) {
            Game.heart = new Game.Heart();
            Game.heart.cmpTransform.local.scaleX(0.25);
            Game.heart.cmpTransform.local.scaleY(0.25);
            Game.hearts.push(Game.heart);
            Game.game.appendChild(Game.heart);
        }
        Game.game.appendChild(Game.level);
        Game.game.appendChild(Game.player);
        Game.game.appendChild(Game.enemies);
        Game.game.appendChild(Game.bg);
        //create music
        await loadMusic();
        Game.ƒ.AudioManager.default.listenTo(Game.player);
        Game.audioComponent = new Game.ƒ.ComponentAudio(Game.audioTheme, true, true);
        if (sessionStorage.getItem("volume")) {
            Game.audioComponent.volume = Number(sessionStorage.getItem("volume")) / 100;
        }
        Game.player.addComponent(Game.audioComponent);
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
        Game.viewport = new Game.ƒ.Viewport();
        Game.viewport.initialize("Viewport", Game.game, Game.camera.getComponent(Game.ƒ.ComponentCamera), canvas);
        Game.viewport.draw();
        console.log(sessionStorage.getItem("volume"));
        //add EventListener
        Game.viewport.addEventListener("\u0192keydown" /* DOWN */, handleKeyboard);
        Game.viewport.activateKeyboardEvent("\u0192keydown" /* DOWN */, true);
        Game.viewport.setFocus(true);
        //start Loop
        Game.ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        Game.ƒ.Loop.start(Game.ƒ.LOOP_MODE.TIME_GAME, 60);
    }
    function update() {
        //check if game over
        if (Game.gameOver) {
            Game.player.act(Game.ACTION.PLAYER_DIE);
            document.getElementById("gameover").style.visibility = "visible";
        }
        //check if any Key is active
        if (!Game.ƒ.Keyboard.isPressedOne([Game.ƒ.KEYBOARD_CODE.W, Game.ƒ.KEYBOARD_CODE.ARROW_UP, Game.ƒ.KEYBOARD_CODE.A, Game.ƒ.KEYBOARD_CODE.ARROW_LEFT, Game.ƒ.KEYBOARD_CODE.D, Game.ƒ.KEYBOARD_CODE.ARROW_RIGHT, Game.ƒ.KEYBOARD_CODE.ARROW_DOWN, Game.ƒ.KEYBOARD_CODE.S, Game.ƒ.KEYBOARD_CODE.SPACE]) && !Game.gameOver) {
            Game.player.act(Game.ACTION.PLAYER_IDLE);
            Game.isAttacking = false;
            Game.isBlocking = false;
        }
        updateHealtBar();
        //camera movement
        Game.camera.cmpTransform.local.translation = Game.player.cmpTransform.local.translation;
        Game.camera.cmpTransform.local.translateY(1.5);
        Game.bg.cmpTransform.local.translation = Game.player.cmpTransform.local.translation;
        Game.bg.cmpTransform.local.translateY(0.25);
        Game.viewport.draw();
    }
    function updateHealtBar() {
        for (let i = 0; i < 10; i++) {
            Game.hearts[i].cmpTransform.local.translation = Game.player.cmpTransform.local.translation;
            Game.hearts[i].cmpTransform.local.translateX(-22.5 + 1.5 * i);
            Game.hearts[i].cmpTransform.local.translateY(15);
        }
        switch (Game.player.health) {
            case (0):
                Game.hearts[0].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (1):
                Game.hearts[0].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[1].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (2):
                Game.hearts[1].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (3):
                Game.hearts[1].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[2].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (4):
                Game.hearts[2].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (5):
                Game.hearts[2].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[3].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (6):
                Game.hearts[3].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (7):
                Game.hearts[3].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[4].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (8):
                Game.hearts[4].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (9):
                Game.hearts[4].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[5].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (10):
                Game.hearts[5].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (11):
                Game.hearts[5].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[6].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (12):
                Game.hearts[6].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (13):
                Game.hearts[6].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[7].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (14):
                Game.hearts[7].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (15):
                Game.hearts[7].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[8].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (16):
                Game.hearts[8].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (17):
                Game.hearts[8].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
                Game.hearts[9].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (18):
                Game.hearts[9].setAnimation(Game.SpriteGenerator.hearts["Heart_Empty"]);
                break;
            case (19):
                Game.hearts[9].setAnimation(Game.SpriteGenerator.hearts["Heart_Half"]);
            case (20):
                break;
        }
    }
    function handleKeyboard(_event) {
        if (!Game.gameOver) {
            switch (_event.code) {
                case (Game.ƒ.KEYBOARD_CODE.W):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_UP):
                    Game.player.act(Game.ACTION.PLAYER_JUMP);
                    Game.isAttacking = false;
                    Game.isBlocking = false;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.A):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_LEFT):
                    Game.player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.LEFT);
                    Game.isAttacking = false;
                    Game.isBlocking = false;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.D):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_RIGHT):
                    Game.player.act(Game.ACTION.PLAYER_WALK, Game.DIRECTION.RIGHT);
                    Game.isAttacking = false;
                    Game.isBlocking = false;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.S):
                case (Game.ƒ.KEYBOARD_CODE.ARROW_DOWN):
                    Game.player.act(Game.ACTION.PLAYER_SHIELD);
                    Game.isAttacking = false;
                    Game.isBlocking = true;
                    break;
                case (Game.ƒ.KEYBOARD_CODE.SPACE):
                    Game.player.act(Game.ACTION.PLAYER_ATTACK);
                    Game.isAttacking = true;
                    Game.isBlocking = false;
                    break;
            }
        }
    }
    async function loadMusic() {
        //load music
        Game.audioTheme = await Game.ƒ.Audio.load("../Assets/Sounds/Music/theme.mp3");
        Game.audioGameOver = await Game.ƒ.Audio.load("../Assets/Sounds/Music/game_over.mp3");
        Game.audioEnding = await Game.ƒ.Audio.load("../Assets/Sounds/Music/ending.mp3");
        Game.audioPlayerHit = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_hurt.mp3");
        Game.audioPlayerWalk = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_walk.mp3");
        Game.audioPlayerAttack = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_attack.mp3");
        Game.audioPlayerJump = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_jump.mp3");
        Game.audioPlayerBlock = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_block.mp3");
        Game.audioPlayerDie = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_die.mp3");
        Game.audioEnemyHit = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/enemy_hit.mp3");
        Game.audioEnemyDie = await Game.ƒ.Audio.load("../Assets/Sounds/SoundEffects/enemy_die.mp3");
    }
    function playMusic(music) {
        Game.audioComponent.play(false);
        let cmpAudio = new Game.ƒ.ComponentAudio(music, true, true);
        if (sessionStorage.getItem("volume")) {
            cmpAudio.volume = Number(sessionStorage.getItem("volume")) / 100;
        }
        Game.player.addComponent(cmpAudio);
    }
    Game.playMusic = playMusic;
    function playSound(sound) {
        let cmpAudio = new Game.ƒ.ComponentAudio(sound, false, true);
        if (sessionStorage.getItem("volume")) {
            cmpAudio.volume = Number(sessionStorage.getItem("volume")) / 100;
        }
        Game.player.addComponent(cmpAudio);
    }
    Game.playSound = playSound;
    function startGame() {
        window.open("game.html", "_self", "fullscreen=yes", true);
    }
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map