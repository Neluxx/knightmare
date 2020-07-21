
namespace Game {
  export import ƒ = FudgeCore;
  export import ƒAid = FudgeAid;

  export let game: ƒ.Node;
  export let level: ƒ.Node;
  let viewport: ƒ.Viewport
  let player: Player;

  window.addEventListener("load", init);

  function init(): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");

    //find spritesheet and generate Sprites
    let img: HTMLImageElement = document.querySelector("img");
    let spritesheet: ƒ.CoatTextured = ƒAid.createSpriteSheet("spritesheet", img);
    SpriteGenerator.generateSprites(spritesheet);

    //create Game
    game = new ƒ.Node("Game");
    player = new Player("Player");
    level = Level.createLevel();
    game.appendChild(level);
    game.appendChild(player);

    //create Camera
    let cmpCamera: ƒ.ComponentCamera = new ƒ.ComponentCamera();
    cmpCamera.pivot.translateZ(10);
    cmpCamera.pivot.lookAt(ƒ.Vector3.ZERO());
    cmpCamera.backgroundColor = ƒ.Color.CSS("white");

    //create Viewport
    viewport = new ƒ.Viewport();
    viewport.initialize("Viewport", game, cmpCamera, canvas);
    viewport.draw();

    //add EventListener
    viewport.addEventListener(ƒ.EVENT_KEYBOARD.DOWN, handleKeyboard);
    viewport.activateKeyboardEvent(ƒ.EVENT_KEYBOARD.DOWN, true);
    viewport.setFocus(true);

    //start Loop
    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    ƒ.Loop.start(ƒ.LOOP_MODE.TIME_GAME, 60);
  }

  function update(_event: ƒ.Eventƒ): void {
    handleInput();

    viewport.draw();
  }

  function handleKeyboard(_event: ƒ.EventKeyboard): void {
    //handle KeyBoard Input
    if (_event.code == ƒ.KEYBOARD_CODE.SPACE) {
      player.act(ACTION.PLAYER_JUMP);
    }
  }

  function handleInput(): void {
    //handle KeyBoard Input
    if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT])) {
      player.act(ACTION.PLAYER_WALK, DIRECTION.LEFT);
    }
    else if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D, ƒ.KEYBOARD_CODE.ARROW_RIGHT])) {
      player.act(ACTION.PLAYER_WALK, DIRECTION.RIGHT);
    }
    else {
      player.act(ACTION.PLAYER_IDLE);
    }
  }
}