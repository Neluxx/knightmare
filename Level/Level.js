"use strict";
var Game;
(function (Game) {
    var ƒ = FudgeCore;
    var ƒAid = FudgeAid;
    class Level extends ƒAid.NodeSprite {
        constructor() {
            super("Element");
        }
        static createLevel() {
            //create Level
            let level = new ƒ.Node("Level");
            let element;
            //add Element to Level
            element = new Game.Element("Grass_Top");
            element.cmpTransform.local.translateY(-1);
            level.appendChild(element);
            for (let i = 1; i <= 20; i++) {
                //add Element to Level
                element = new Game.Element("Grass_Top");
                element.cmpTransform.local.translateX((-0.5) * i);
                element.cmpTransform.local.translateY(-1);
                level.appendChild(element);
                //add Element to Level
                element = new Game.Element("Grass_Top");
                element.cmpTransform.local.translateX((0.5) * i);
                element.cmpTransform.local.translateY(-1);
                level.appendChild(element);
            }
            //add Element to Level
            element = new Game.Element("Grass_Top");
            element.cmpTransform.local.translateX(2);
            element.cmpTransform.local.translateY(0.05);
            level.appendChild(element);
            //add Element to Level
            element = new Game.Element("Grass_Top");
            element.cmpTransform.local.translateX(2.5);
            element.cmpTransform.local.translateY(0.05);
            level.appendChild(element);
            return level;
        }
        static createEnemies() {
            //create enemies
            let enemies = new ƒ.Node("Enemies");
            let bat;
            /*let wolf: Wolf;
        
            wolf = new Wolf();
            wolf.cmpTransform.local.translateX(1.5);
            wolf.cmpTransform.local.translateY(0.5);
            enemies.appendChild(wolf);*/
            bat = new Game.Bat();
            bat.cmpTransform.local.translateX(-4);
            enemies.appendChild(bat);
            return enemies;
        }
        static createBackground() {
            let bgImg = document.querySelector("#background");
            let mesh = new ƒ.MeshSprite();
            let mtr = Game.SpriteGenerator.getTextureMaterial("Background", bgImg);
            let background = new ƒAid.Node("Background", ƒ.Matrix4x4.IDENTITY(), mtr, mesh);
            background.cmpTransform.local.scaleX(12);
            background.cmpTransform.local.scaleY(6);
            return background;
        }
    }
    Game.Level = Level;
})(Game || (Game = {}));
//# sourceMappingURL=Level.js.map