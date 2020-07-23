namespace Game {

  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class Player extends Character {
    public inAir: boolean;

    public constructor() {
      super();
      this.addComponent(new ƒ.ComponentTransform());
      this.show(ACTION.PLAYER_IDLE);
      ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, this.update);
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
          if (!this.inAir) {
            this.speed.y = 2;
            this.inAir = true;
          }
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
          this.inAir = false;
        }
      }
    }
  }
}