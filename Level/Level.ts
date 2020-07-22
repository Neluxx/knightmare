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
      element.cmpTransform.local.translateY(0.17);
      element.cmpTransform.local.scaleY(0.2);
      element.cmpTransform.local.scaleX(2);
      level.appendChild(element);
  
      //add Element to Level
      element = new Element();
      element.cmpTransform.local.translateY(-1.6);
      element.cmpTransform.local.scaleY(0.2);
      element.cmpTransform.local.scaleX(5);
      level.appendChild(element);
  
      return level;
    }
  }
}