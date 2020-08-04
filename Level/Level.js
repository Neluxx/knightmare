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
            let random;
            let levelSize = 10;
            let offset = 5;
            let batAmountMin = 2;
            let batAmountMax = 4;
            let batAmount = Math.floor(batAmountMin + (Math.random() * (batAmountMax - batAmountMin)));
            let bat;
            for (let i = 0; i < batAmount; i++) {
                bat = new Game.Bat();
                random = (Math.floor(Math.random() * Math.floor(levelSize))) - offset;
                bat.cmpTransform.local.translateX(random);
                //bat.cmpTransform.local.translateY(0);
                enemies.appendChild(bat);
            }
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