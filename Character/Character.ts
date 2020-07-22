namespace Game {

  import ƒ = FudgeCore;

  export class Character extends ƒAid.NodeSprite {
    public node: ƒ.Node;
    public health: number;
    public strength: number;
    public speed: ƒ.Vector3 = ƒ.Vector3.ZERO();
    public static speedMax: ƒ.Vector2 = new ƒ.Vector2(1.5, 5); //units per second
    public static gravity: ƒ.Vector2 = ƒ.Vector2.Y(-3);

    public constructor() {
      super("Character");
    }
  }

  export enum PLAYER_ACTION {
    IDLE = "Idle",
    WALK = "Walk",
    //ATTACK = "Attack",
    //DEATH = "Death",
    //ROLL = "Roll",          //necessary?
    //SHIELD = "Shield",      //necessary?
    JUMP = "Jump"
  }

  export enum BAT_ACTION {
    WALK = "Walk",
    ATTACK = "Attack",
    DEATH = "Death"
  }

  export enum WOLF_ACTION {
    IDLE = "Idle",
    WALK = "Walk",
    ATTACK = "Attack",
    DEATH = "Death"
  }

  export enum WITCH_ACTION {
    IDLE = "Idle",
    WALK = "Walk",
    ATTACK = "Attack",
    DEATH = "Death"
  }

  export enum GOLEM_ACTION {
    IDLE = "Idle",
    //IDLE_EXTRA = "Idle Extra",
    WALK = "Walk",
    ATTACK = "Attack",
    DEATH = "Death"
  }

  export enum DIRECTION {
    LEFT,
    RIGHT,
  }
}