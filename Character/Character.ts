namespace Game {

  import ƒ = FudgeCore;

  export class Character extends ƒ.Node {
    node: ƒ.Node;
    health: number;
    strength: number;
    speed: number;

    public constructor() {
      super("Character");
    }
  }

  export enum ACTION {
    IDLE = "Idle",
    WALK = "Walk",
    JUMP = "Jump"
  }

  export enum DIRECTION {
    LEFT,
    RIGHT,
  }
}