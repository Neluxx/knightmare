namespace Game {

  import ƒ = FudgeCore;

  export class Enemy extends Character {

    constructor() {
      super();
      this.addComponent(new ƒ.ComponentTransform());
    }
  }
}