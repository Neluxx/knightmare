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


      //  FLOOR positive X
      for (let i: number = 1; i <= 70; i++) {

        //add Element to Level
        element = new Element("Grass_Top");
        element.cmpTransform.local.translateX((0.5) * i);
        element.cmpTransform.local.translateY(-1.0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX((0.5) * i);
        element.cmpTransform.local.translateY(-1.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX((0.5) * i);
        element.cmpTransform.local.translateY(-2.0);
        level.appendChild(element);
      }

      // Floor Grass negative X
      for (let i = 1; i <= 10; i++) {
        //add Element to Level
        element = new Element("Grass_Top");
        element.cmpTransform.local.translateX((-0.5) * i);
        element.cmpTransform.local.translateY(-1);
        level.appendChild(element);

      }

      // Zero Point
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(0);
      element.cmpTransform.local.translateY(-1);
      level.appendChild(element);
      //add Element to LeveL
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(0);
      element.cmpTransform.local.translateY(-1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(0);
      element.cmpTransform.local.translateY(-2.0);
      level.appendChild(element);


      //WALL Dirt negative x
      for (let i = 1; i <= 20; i++) {

        //add Element to LeveL
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX((-0.5) * i);
        element.cmpTransform.local.translateY(-1.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX((-0.5) * i);
        element.cmpTransform.local.translateY(-2.0);
        level.appendChild(element);
      }
      for (let i = 1; i <= 9; i++) {
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(-0.0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(-0.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(-1.0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(0.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(1.0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(1.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(2.0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(2.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(3.0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(3.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(4.0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(4.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(5.0);
        level.appendChild(element);
      }

      for (let i = 1; i <= 9; i++) {
        //add Element to Level
        element = new Element("Grass_Right");
        element.cmpTransform.local.translateX(-5.5);
        element.cmpTransform.local.translateY((0.5) * i);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(-5.5 - (i * 0.5));
        element.cmpTransform.local.translateY(-0.5);
        level.appendChild(element);
      }

      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(-5.5);
      element.cmpTransform.local.translateY((0.5) * 10);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(-5.5);
      element.cmpTransform.local.translateY((0));
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(-5.5);
      element.cmpTransform.local.translateY((-0.5));
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Right");
      element.cmpTransform.local.translateX(-5.5);
      element.cmpTransform.local.translateY((-1));
      level.appendChild(element);




      //RIGHT END

      for (let i = 1; i <= 10; i++) {
        // DIRT FLOOR
        //add Element to LeveL
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35 + (i * 0.5));
        element.cmpTransform.local.translateY(-1.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35 + (i * 0.5));
        element.cmpTransform.local.translateY(-2.0);
        level.appendChild(element);
        //add Element to Level

        //WALL  RIGHT
        //add Element to Level
        element = new Element("Grass_Left");
        element.cmpTransform.local.translateX(35.5);
        element.cmpTransform.local.translateY((0.5) * i);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(-1);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(-0.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(0);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(0.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(1);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(1.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(2);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(2.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(3);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(3.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(4);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(4.5);
        level.appendChild(element);
        //add Element to Level
        element = new Element("Dirt_All");
        element.cmpTransform.local.translateX(35.5 + (i * 0.5));
        element.cmpTransform.local.translateY(5);
        level.appendChild(element);
      }

      // DIRT FLOOR
        //add Element to LeveL
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(35 + (11 * 0.5));
      element.cmpTransform.local.translateY(-1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(35 + (11 * 0.5));
      element.cmpTransform.local.translateY(-2.0);
      level.appendChild(element);

      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(35.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(35.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Left");
      element.cmpTransform.local.translateX(35.5);
      element.cmpTransform.local.translateY(-1);
      level.appendChild(element);




      //Platforms
      //Block 1
      //add Element to Level
      element = new Element("Grass_All");
      element.cmpTransform.local.translateX(-1);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);

      //Block 2
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(-3.0);
      element.cmpTransform.local.translateY(2);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(-2.5);
      element.cmpTransform.local.translateY(2);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(-2.0);
      element.cmpTransform.local.translateY(2);
      level.appendChild(element);


      //BLock 3
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(-4);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Left");
      element.cmpTransform.local.translateX(-3.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(-3.5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(-3.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(-3);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(-3);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Right");
      element.cmpTransform.local.translateX(-3);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(-2.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(-2);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(-1.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Right");
      element.cmpTransform.local.translateX(-2);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(-2.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);

      //Block 4
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(1.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Left");
      element.cmpTransform.local.translateX(2.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(2.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(2);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(3);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(3);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Right");
      element.cmpTransform.local.translateX(3.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(3.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(4);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);


      //Block 5
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(5.5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);

      //Block 6
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(6.5);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(7);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);

      //Block 7
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(8);
      element.cmpTransform.local.translateY(1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(8.5);
      element.cmpTransform.local.translateY(1.5);
      level.appendChild(element);




      //Block 8
      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(10);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(10);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(10);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(10);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(10.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(10.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(10.5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(10.5);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(11);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(11.5);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(12);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(12);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(12.5);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_All");
      element.cmpTransform.local.translateX(14);
      element.cmpTransform.local.translateY(0.35);
      level.appendChild(element);

      //Block 9
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(15);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(15.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(16);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(16.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Left");
      element.cmpTransform.local.translateX(17);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(17);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(17);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(17.5);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Left");
      element.cmpTransform.local.translateX(18);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Left");
      element.cmpTransform.local.translateX(17.5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(18);
      element.cmpTransform.local.translateY(1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(18.5);
      element.cmpTransform.local.translateY(1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(18.5);
      element.cmpTransform.local.translateY(1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(18);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(17.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(17.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(18);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(18);
      element.cmpTransform.local.translateY(-0.50);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(18.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(18.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(18.5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(18.5);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(19);
      element.cmpTransform.local.translateY(1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(19);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(19);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(19);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(19);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);

      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(19.5);
      element.cmpTransform.local.translateY(1.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(19.5);
      element.cmpTransform.local.translateY(1);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(19.5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Right");
      element.cmpTransform.local.translateX(19.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(20);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Right");
      element.cmpTransform.local.translateX(19.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);

      //Block 10
      //add Element to Level
      element = new Element("Grass_All");
      element.cmpTransform.local.translateX(15.5);
      element.cmpTransform.local.translateY(0.7);
      level.appendChild(element);


      //Block 11
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(21.25);
      element.cmpTransform.local.translateY(1.25);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(21.75);
      element.cmpTransform.local.translateY(1.25);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(22.25);
      element.cmpTransform.local.translateY(1.25);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(22.75);
      element.cmpTransform.local.translateY(1.25);
      level.appendChild(element);

      //Block 12
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(24);
      element.cmpTransform.local.translateY(0.75);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(24.5);
      element.cmpTransform.local.translateY(0.75);
      level.appendChild(element);


      //Block 13
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(26);
      element.cmpTransform.local.translateY(0.25);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(26.5);
      element.cmpTransform.local.translateY(0.25);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(27);
      element.cmpTransform.local.translateY(0.25);
      level.appendChild(element);

      //Block 14
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(28);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Left");
      element.cmpTransform.local.translateX(28.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(28.5);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Left");
      element.cmpTransform.local.translateX(28.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(29);
      element.cmpTransform.local.translateY(0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(29);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Right");
      element.cmpTransform.local.translateX(29);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(29.5);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(30);
      element.cmpTransform.local.translateY(0);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(30.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Corner_Top_Right");
      element.cmpTransform.local.translateX(30);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Dirt_All");
      element.cmpTransform.local.translateX(29.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);

      //Block 15
      //add Element to Level
      element = new Element("Grass_Top_Left");
      element.cmpTransform.local.translateX(33);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top");
      element.cmpTransform.local.translateX(33.5);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Right");
      element.cmpTransform.local.translateX(34);
      element.cmpTransform.local.translateY(-0.5);
      level.appendChild(element);

      //Block 16
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(30);
      element.cmpTransform.local.translateY(3.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down");
      element.cmpTransform.local.translateX(30.5);
      element.cmpTransform.local.translateY(3.5);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(31);
      element.cmpTransform.local.translateY(3.5);
      level.appendChild(element);



      // Skyblock Accesoires

      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(3.75);
      element.cmpTransform.local.translateY(3.75);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(4.25);
      element.cmpTransform.local.translateY(3.75);
      level.appendChild(element);
      //add Element to Level
      element = new Element("Grass_All");
      element.cmpTransform.local.translateX(4.25);
      element.cmpTransform.local.translateY(3.25);
      level.appendChild(element);


      //Block 
      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(9.75);
      element.cmpTransform.local.translateY(3.5);
      level.appendChild(element);

      for (let i = 1; i <= 13; i++) {
        //add Element to Level
        element = new Element("Grass_Top_Down");
        element.cmpTransform.local.translateX(9.75 + (i * 0.5));
        element.cmpTransform.local.translateY(3.5);
        level.appendChild(element);
      }

      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(16.25);
      element.cmpTransform.local.translateY(3.5);
      level.appendChild(element);

      //add Element to Level
      element = new Element("Grass_Top_Down_Left");
      element.cmpTransform.local.translateX(24);
      element.cmpTransform.local.translateY(0.75);
      level.appendChild(element);

      //add Element to Level
      element = new Element("Grass_Top_Down_Right");
      element.cmpTransform.local.translateX(24.5);
      element.cmpTransform.local.translateY(0.75);
      level.appendChild(element);





      return level;
    }

    public static createEnemies(): ƒ.Node {
      //create enemies
      let enemies: ƒ.Node = new ƒ.Node("Enemies");
      let random: number;

      let levelSize: number = 34;

      let bat: Bat;
      let batAmountMin: number = 1;
      let batAmountMax: number = 2;
      let batAmount: number = Math.round(batAmountMin + (Math.random() * (batAmountMax - batAmountMin)));

      let golem: Golem;
      let golemAmountMin: number = 0;
      let golemAmountMax: number = 1;
      let golemAmount: number = Math.round(golemAmountMin + (Math.random() * (golemAmountMax - golemAmountMin)));

      let witch: Witch;
      let witchAmountMin: number = 1;
      let witchAmountMax: number = 1;
      let witchAmount: number = Math.round(witchAmountMin + (Math.random() * (witchAmountMax - witchAmountMin)));

      let wolf: Wolf;
      let wolfAmountMin: number = 1;
      let wolfAmountMax: number = 2;
      let wolfAmount: number = Math.round(wolfAmountMin + (Math.random() * (wolfAmountMax - wolfAmountMin)));

      for (let i = 0; i < batAmount; i++) {
        bat = new Bat();
        random = Math.round(Math.random() * levelSize);
        bat.cmpTransform.local.translateX(random);
        //bat.cmpTransform.local.translateY(0);
        enemies.appendChild(bat);
      }

      for (let i = 0; i < wolfAmount; i++) {
        wolf = new Wolf();
        random = Math.round(Math.random() * levelSize);
        wolf.cmpTransform.local.translateX(random);
        //wolf.cmpTransform.local.translateY(0);
        enemies.appendChild(wolf);
      }

      for (let i = 0; i < witchAmount; i++) {
        witch = new Witch();
        random = Math.round(Math.random() * levelSize);
        witch.cmpTransform.local.translateX(random);
        //witch.cmpTransform.local.translateY(0);
        enemies.appendChild(witch);
      }

      for (let i = 0; i < golemAmount; i++) {
        golem = new Golem();
        random = Math.round(Math.random() * levelSize);
        golem.cmpTransform.local.translateX(random);
        //golem.cmpTransform.local.translateY(0);
        enemies.appendChild(golem);
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