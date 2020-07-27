namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class Character extends ƒAid.NodeSprite {
    public node: ƒAid.Node;
    public action: ACTION;
    protected direct: number;
    public health: number;
    public strength: number;
    public attackspeed: number;
    public canTakeDamage: boolean = true;
    public isDead: boolean = false;
    public isDying: boolean = false;
    public speed: ƒ.Vector3 = ƒ.Vector3.ZERO();
    public speedMax: ƒ.Vector2 = new ƒ.Vector2(1.5, 5); //units per second
    public static gravity: ƒ.Vector2 = ƒ.Vector2.Y(-3);

    public constructor() {
      super("Character");
    }

    public show(_action: ACTION): void {
      //show only the animation defined for the action
      if (_action == ACTION.PLAYER_JUMP)
        return;

      this.setAnimation(<ƒAid.SpriteSheetAnimation>SpriteGenerator.animations[_action]);
    }
  }

  export enum ACTION {
    PLAYER_IDLE = "Player_Idle",
    PLAYER_WALK = "Player_Walk",
    PLAYER_ATTACK = "Player_Attack",
    PLAYER_DIE = "Player_Die",
    PLAYER_DEAD = "Player_Dead",
    PLAYER_JUMP = "Player_Jump",

    BAT_WALK = "Bat_Walk",
    BAT_ATTACK = "Bat_Attack",
    BAT_DIE = "Bat_Die",
    BAT_DEAD = "Bat_Dead",

    WOLF_IDLE = "Wolf_Idle",
    WOLF_WALK = "Wolf_Walk",
    WOLF_ATTACK = "Wolf_Attack",
    WOLF_DEATH = "Wolf_Death",

    WITCH_IDLE = "Witch_Idle",
    WITCH_WALK = "Witch_Walk",
    WITCH_ATTACK = "Witch_Attack",
    WITCH_DEATH = "Witch_Death",
    
    GOLEM_IDLE = "Golem_Idle",
    GOLEM_WALK = "Golem_Walk",
    GOLEM_ATTACK = "Golem_Attack",
    GOLEM_DEATH = "Golem_Death"
  }

  export enum DIRECTION {
    LEFT,
    RIGHT,
  }
}