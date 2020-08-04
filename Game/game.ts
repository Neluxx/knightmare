
namespace Game {
  export import ƒ = FudgeCore;
  export import ƒAid = FudgeAid;

  //variables
  export let data: ExternalData;
  export let game: ƒ.Node;
  export let level: ƒ.Node;
  export let player: Player;
  export let enemies: ƒ.Node;
  export let camera: ƒ.Node;
  export let gameOver: boolean = false;
  export let isAttacking: boolean = false;
  export let isBlocking: boolean = false;
  export let viewport: ƒ.Viewport;
  export let bg: ƒ.Node;

  //music
  export let audioTheme: ƒ.Audio;
  export let audioGameOver: ƒ.Audio;
  export let audioEnding: ƒ.Audio;

  //sounds
  export let audioPlayerHit: ƒ.Audio;
  export let audioPlayerWalk: ƒ.Audio;
  export let audioPlayerAttack: ƒ.Audio;
  export let audioPlayerJump: ƒ.Audio;
  export let audioPlayerBlock: ƒ.Audio;
  export let audioPlayerDie: ƒ.Audio;

  export let audioEnemyHit: ƒ.Audio;
  export let audioEnemyDie: ƒ.Audio;

  window.addEventListener("load", init);

  async function init(): Promise<void> {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");

    //load data
    data = await loadJSON();
    
    //find spritesheet and generate Sprites
    let img: HTMLImageElement = document.querySelector("#spritesheet");
    let spritesheet: ƒ.CoatTextured = ƒAid.createSpriteSheet("Spritesheet", img);
    SpriteGenerator.generateAnimations(spritesheet);
    
    img = document.querySelector("#tileset");
    spritesheet = ƒAid.createSpriteSheet("Tileset", img);
    SpriteGenerator.generateTileset(spritesheet);
    
    //create Game
    game = new ƒ.Node("Game");
    player = new Player();
    level = Level.createLevel();
    enemies = Level.createEnemies();
    bg = Level.createBackground();
    game.appendChild(level);
    game.appendChild(player);
    game.appendChild(enemies);
    game.appendChild(bg);

    //create music
    await loadMusic();
    ƒ.AudioManager.default.listenTo(player);
    playMusic(audioTheme);
    
    //create Camera
    let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
    cmpCamera.pivot.translateZ(10);
    cmpCamera.pivot.lookAt(ƒ.Vector3.ZERO());
    cmpCamera.backgroundColor = ƒ.Color.CSS("white");

    camera = new ƒ.Node("Camera");
    camera.addComponent(new ƒ.ComponentTransform());
    camera.addComponent(cmpCamera);
    game.appendChild(camera);

    //create Viewport
    viewport = new ƒ.Viewport();
    viewport.initialize("Viewport", game, camera.getComponent(ƒ.ComponentCamera), canvas);
    viewport.draw();

    //add EventListener
    viewport.addEventListener(ƒ.EVENT_KEYBOARD.DOWN, handleKeyboard);
    viewport.activateKeyboardEvent(ƒ.EVENT_KEYBOARD.DOWN, true);
    viewport.setFocus(true);

    //start Loop
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    ƒ.Loop.start(ƒ.LOOP_MODE.TIME_GAME, 60);
  }

  function update(): void {
    //check if game over
    if (gameOver) {
      player.act(ACTION.PLAYER_DIE);
    }

    //check if any Key is active
    if (!ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W, ƒ.KEYBOARD_CODE.ARROW_UP, ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT, ƒ.KEYBOARD_CODE.D, ƒ.KEYBOARD_CODE.ARROW_RIGHT, ƒ.KEYBOARD_CODE.ARROW_DOWN, ƒ.KEYBOARD_CODE.S, ƒ.KEYBOARD_CODE.SPACE]) && !gameOver) {
      player.act(ACTION.PLAYER_IDLE);
      isAttacking = false;
      isBlocking = false;
    }

    //camera movement
    camera.cmpTransform.local.translation = player.cmpTransform.local.translation;
    camera.cmpTransform.local.translateY(1.5);
    bg.cmpTransform.local.translation = player.cmpTransform.local.translation;
    bg.cmpTransform.local.translateY(0.25);

    viewport.draw();
  }

  function handleKeyboard(_event: ƒ.EventKeyboard): void {
    if (!gameOver) {
      switch(_event.code) {
        case (ƒ.KEYBOARD_CODE.W):
        case (ƒ.KEYBOARD_CODE.ARROW_UP):
          player.act(ACTION.PLAYER_JUMP);
          isAttacking = false;
          isBlocking = false;
          break;
        case (ƒ.KEYBOARD_CODE.A):
        case (ƒ.KEYBOARD_CODE.ARROW_LEFT):
          player.act(ACTION.PLAYER_WALK, DIRECTION.LEFT);
          isAttacking = false;
          isBlocking = false;
          break;
        case (ƒ.KEYBOARD_CODE.D):
        case (ƒ.KEYBOARD_CODE.ARROW_RIGHT):
          player.act(ACTION.PLAYER_WALK, DIRECTION.RIGHT);
          isAttacking = false;
          isBlocking = false;
          break;
        case (ƒ.KEYBOARD_CODE.S):
        case (ƒ.KEYBOARD_CODE.ARROW_DOWN):
          player.act(ACTION.PLAYER_SHIELD);
          isAttacking = false;
          isBlocking = true;
          break;
        case (ƒ.KEYBOARD_CODE.SPACE):
          player.act(ACTION.PLAYER_ATTACK);
          isAttacking = true;
          isBlocking = false;
          break;
      }
    }
  }

  async function loadMusic(): Promise<void> {
    //load music
    audioTheme = await ƒ.Audio.load("../Assets/Sounds/Music/theme.mp3");
    audioGameOver = await ƒ.Audio.load("../Assets/Sounds/Music/game_over.mp3");
    audioEnding = await ƒ.Audio.load("../Assets/Sounds/Music/ending.mp3");
    audioPlayerHit = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_hurt.mp3");
    audioPlayerWalk = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_walk.mp3");
    audioPlayerAttack = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_attack.mp3");
    audioPlayerJump = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_jump.mp3");
    audioPlayerBlock = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_block.mp3");
    audioPlayerDie = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/player_die.mp3");
    audioEnemyHit = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/enemy_hit.mp3");
    audioEnemyDie = await ƒ.Audio.load("../Assets/Sounds/SoundEffects/enemy_die.mp3");
  }

  export function playMusic(music: ƒ.Audio) {
    let cmpAudio: ƒ.ComponentAudio = new ƒ.ComponentAudio(music, true, true);
    player.addComponent(cmpAudio);
  }

  export function playSound(sound: ƒ.Audio) {
    let cmpAudio: ƒ.ComponentAudio = new ƒ.ComponentAudio(sound, false, true);
    player.addComponent(cmpAudio);
  }
}