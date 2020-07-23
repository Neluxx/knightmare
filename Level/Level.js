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
            element.cmpTransform.local.scaleX(20);
            level.appendChild(element);
            return level;
        }
        static createEnemies() {
            //create enemies
            let enemies = new ƒ.Node("Enemies");
            let bat;
            let wolf;
            wolf = new Game.Wolf();
            wolf.cmpTransform.local.translateX(1.5);
            wolf.cmpTransform.local.translateY(0.5);
            enemies.appendChild(wolf);
            bat = new Game.Bat();
            bat.cmpTransform.local.translateX(-1);
            bat.cmpTransform.local.translateY(-0.5);
            enemies.appendChild(bat);
            return enemies;
        }
        static createBackground() {
            let bgImg = document.querySelector("#background");
            let mesh = new ƒ.MeshSprite();
            let mtr = Game.SpriteGenerator.getTextureMaterial("Background", bgImg);
            let background = new Game.ƒAid.Node("Background", ƒ.Matrix4x4.IDENTITY(), mtr, mesh);
            background.cmpTransform.local.scaleX(15);
            background.cmpTransform.local.scaleY(15);
            return background;
        }
    }
    Game.Level = Level;
})(Game || (Game = {}));
//# sourceMappingURL=Level.js.map