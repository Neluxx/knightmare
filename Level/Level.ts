namespace Game {
  import ƒ = FudgeCore;
  import ƒAid = FudgeAid;

  export class Level extends ƒAid.NodeSprite {

    public constructor() {
      super("Element");
    }
    
    public static createLevel(): ƒ.Node {
      //create Level
      let level: ƒ.Node = new ƒ.Node("Level");
      let element: Element;

      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateY(-1);
      level.appendChild(element);

      for (let i = 1; i <= 20; i++) {
        //add Element to Level
        element = new Element("Grass_Top");
        element.cmpTransform.local.translateX((-0.5)*i);
        element.cmpTransform.local.translateY(-1);
        level.appendChild(element);

        //add Element to Level
        element = new Element("Grass_Top");
        element.cmpTransform.local.translateX((0.5)*i);
        element.cmpTransform.local.translateY(-1);
        level.appendChild(element);
      }

      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(2);
      element.cmpTransform.local.translateY(0.05);
      level.appendChild(element);

      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(2.5);
      element.cmpTransform.local.translateY(0.05);
      level.appendChild(element);
  
      return level;
    }

    public static createEnemies(): ƒ.Node {
      //create enemies
      let enemies: ƒ.Node = new ƒ.Node("Enemies");
      let random: number;

      let levelSize: number = 10;
      let offset: number = 5;

      let batAmountMin: number = 2;
      let batAmountMax: number = 4;
      let batAmount: number = Math.floor(batAmountMin + (Math.random() * (batAmountMax - batAmountMin)));
      let bat: Bat;

      for (let i = 0; i < batAmount; i++) {
        bat = new Bat();
        random = (Math.floor(Math.random() * Math.floor(levelSize))) - offset;
        bat.cmpTransform.local.translateX(random);
        //bat.cmpTransform.local.translateY(0);
        enemies.appendChild(bat);
      }
  
      return enemies;
    }
  
    public static createBackground(): ƒ.Node {
      let bgImg: HTMLImageElement = document.querySelector("#background");
      let mesh: ƒ.MeshSprite = new ƒ.MeshSprite();
      let mtr: ƒ.Material = SpriteGenerator.getTextureMaterial("Background", bgImg);
      let background: ƒAid.Node = new ƒAid.Node("Background", ƒ.Matrix4x4.IDENTITY(), mtr, mesh);
      background.cmpTransform.local.scaleX(12);
      background.cmpTransform.local.scaleY(6);
  
      return background;
    }
  }
}