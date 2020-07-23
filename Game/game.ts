
namespace Game {
  export import ƒ = FudgeCore;
  export import ƒAid = FudgeAid;

  export let game: ƒ.Node;
  export let level: ƒ.Node;
  export let player: Player;
  export let enemies: ƒ.Node;
  export let camera: ƒ.Node;
  export let gameOver: boolean = false;
  export let isAttacking: boolean = false;
  let viewport: ƒ.Viewport;
  let bg: ƒ.Node;
  

  window.addEventListener("load", init);

  function init(): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");

    //find spritesheet and generate Sprites
    let img: HTMLImageElement = document.querySelector("#spritesheet");
    let spritesheet: ƒ.CoatTextured = ƒAid.createSpriteSheet("Spritesheet", img);
    SpriteGenerator.generateSprites(spritesheet);

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
      player.act(ACTION.PLAYER_DEATH);
    }

    //check if any Key is active
    if (!ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W, ƒ.KEYBOARD_CODE.ARROW_UP, ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT, ƒ.KEYBOARD_CODE.D, ƒ.KEYBOARD_CODE.ARROW_RIGHT, ƒ.KEYBOARD_CODE.SPACE]) && !gameOver) {
      player.act(ACTION.PLAYER_IDLE);
      isAttacking = false;
    }

    //camera movement
    camera.cmpTransform.local.translation = player.cmpTransform.local.translation;

    viewport.draw();
  }

  function handleKeyboard(_event: ƒ.EventKeyboard): void {
    if (!gameOver) {
      switch(_event.code) {
        case (ƒ.KEYBOARD_CODE.W):
        case (ƒ.KEYBOARD_CODE.ARROW_UP):
          player.act(ACTION.PLAYER_JUMP);
          isAttacking = false;
          break;
        case (ƒ.KEYBOARD_CODE.A):
        case (ƒ.KEYBOARD_CODE.ARROW_LEFT):
          player.act(ACTION.PLAYER_WALK, DIRECTION.LEFT);
          isAttacking = false;
          break;
        case (ƒ.KEYBOARD_CODE.D):
        case (ƒ.KEYBOARD_CODE.ARROW_RIGHT):
          player.act(ACTION.PLAYER_WALK, DIRECTION.RIGHT);
          isAttacking = false;
          break;
        case (ƒ.KEYBOARD_CODE.S):
        case (ƒ.KEYBOARD_CODE.ARROW_DOWN):
          //shield
          //player.act(ACTION.PLAYER_SHIELD);
          //isAttacking = false;
          break;
        case (ƒ.KEYBOARD_CODE.SPACE):
          player.act(ACTION.PLAYER_ATTACK);
          isAttacking = true;
          break;
      }
    }
  }
}