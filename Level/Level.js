"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    class Level extends ƒ.Node {
        constructor() {
            super("Element");
        }
        static createLevel() {
            //create Level
            let level = new ƒ.Node("Level");
            let element;
            //add Element to Level
            element = new Game.Element();
            element.cmpTransform.local.scaleY(0.2);
            level.appendChild(element);
            //add Element to Level
            element = new Game.Element();
            element.cmpTransform.local.translateX(1.4);
            element.cmpTransform.local.translateY(-0.17);
            element.cmpTransform.local.scaleY(0.2);
            element.cmpTransform.local.scaleX(2);
            level.appendChild(element);
            //add Element to Level
            element = new Game.Element();
            element.cmpTransform.local.translateY(-1.6);
            element.cmpTransform.local.scaleY(0.2);
            element.cmpTransform.local.scaleX(5);
            level.appendChild(element);
            return level;
        }
    }
    Game.Level = Level;
})(Game || (Game = {}));
//# sourceMappingURL=Level.js.map