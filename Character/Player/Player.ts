namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class Player extends ƒAid.NodeSprite {
    private static speedMax: ƒ.Vector2 = new ƒ.Vector2(1.5, 5); // units per second
    private static gravity: ƒ.Vector2 = ƒ.Vector2.Y(-3);
    public speed: ƒ.Vector3 = ƒ.Vector3.ZERO();
    private action: ACTION;

    constructor(_name: string = "Player") {
      super(_name);
      this.addComponent(new ƒ.ComponentTransform());
      this.show(ACTION.PLAYER_IDLE);
      ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, this.update);
    }

    public show(_action: ACTION): void {
      //show only the animation defined for the action
      if (_action == ACTION.PLAYER_JUMP)
        return;
      this.setAnimation(<ƒAid.SpriteSheetAnimation>SpriteGenerator.animations[_action]);
    }

    public act(_action: ACTION, _direction?: DIRECTION): void {
      //move, jump or attack
      switch (_action) {
        case ACTION.PLAYER_IDLE:
          this.speed.x = 0;
          break;
        case ACTION.PLAYER_WALK:
          let direction: number = (_direction == DIRECTION.RIGHT ? 1 : -1);
          this.speed.x = Player.speedMax.x; // * direction;
          this.cmpTransform.local.rotation = ƒ.Vector3.Y(90 - 90 * direction);
          break;
        case ACTION.PLAYER_JUMP:
          this.speed.y = 2;
          break;
      }
      if (_action == this.action)
        return;

      this.action = _action;
      this.show(_action);
    }

    private update = (_event: ƒ.Eventƒ): void => {
      let timeFrame: number = ƒ.Loop.timeFrameGame / 1000;
      this.speed.y += Player.gravity.y * timeFrame;
      let distance: ƒ.Vector3 = ƒ.Vector3.SCALE(this.speed, timeFrame);
      this.cmpTransform.local.translate(distance);

      this.checkCollision();
    }

    private checkCollision(): void {
      for (let element of level.getChildren()) {
        let rect: ƒ.Rectangle = (<Element>element).getRectWorld();
        let hit: boolean = rect.isInside(this.cmpTransform.local.translation.toVector2());
        if (hit) {
          let translation: ƒ.Vector3 = this.cmpTransform.local.translation;
          translation.y = rect.y;
          this.cmpTransform.local.translation = translation;
          this.speed.y = 0;
        }
      }
    }
  }
}