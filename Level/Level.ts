namespace Game {
  import ƒ = FudgeCore;

  export class Level extends ƒ.Node {

    public constructor() {
      super("Element");
    }
    
    public static createLevel(): ƒ.Node {
      //create Level
      let level: ƒ.Node = new ƒ.Node("Level");
      let element: Element;

      //add Element to Level
      element = new Element();
      element.cmpTransform.local.scaleY(0.2);
      level.appendChild(element);
  
      //add Element to Level
      element = new Element();
      element.cmpTransform.local.translateX(1.4);
      element.cmpTransform.local.translateY(-0.17);
      element.cmpTransform.local.scaleY(0.2);
      element.cmpTransform.local.scaleX(2);
      level.appendChild(element);
  
      //add Element to Level
      element = new Element();
      element.cmpTransform.local.translateY(-1.6);
      element.cmpTransform.local.scaleY(0.2);
      element.cmpTransform.local.scaleX(20);
      level.appendChild(element);
  
      return level;
    }

    public static createEnemies(): ƒ.Node {
      //create enemies
      let enemies: ƒ.Node = new ƒ.Node("Enemies");
      let bat: Bat;
      /*let wolf: Wolf;
  
      wolf = new Wolf();
      wolf.cmpTransform.local.translateX(1.5);
      wolf.cmpTransform.local.translateY(0.5);
      enemies.appendChild(wolf);*/
  
      bat = new Bat();
      bat.cmpTransform.local.translateX(-5);
      bat.cmpTransform.local.translateY(-0.5);
      enemies.appendChild(bat);
  
      return enemies;
    }
  
    public static createBackground(): ƒ.Node {
      let bgImg: HTMLImageElement = document.querySelector("#background");
      let mesh: ƒ.MeshSprite = new ƒ.MeshSprite();
      let mtr: ƒ.Material = SpriteGenerator.getTextureMaterial("Background", bgImg);
      let background: ƒAid.Node = new ƒAid.Node("Background", ƒ.Matrix4x4.IDENTITY(), mtr, mesh);
      background.cmpTransform.local.scaleX(15);
      background.cmpTransform.local.scaleY(15);
  
      return background;
    }
  }
}