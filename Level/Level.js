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
            let bat;
            let batAmountMin = 2;
            let batAmountMax = 3;
            let batAmount = Math.floor(batAmountMin + (Math.random() * (batAmountMax - batAmountMin)));
            let golem;
            let golemAmountMin = 0;
            let golemAmountMax = 1;
            let golemAmount = Math.floor(golemAmountMin + (Math.random() * (golemAmountMax - golemAmountMin)));
            let witch;
            let witchAmountMin = 1;
            let witchAmountMax = 1;
            let witchAmount = Math.floor(witchAmountMin + (Math.random() * (witchAmountMax - witchAmountMin)));
            let wolf;
            let wolfAmountMin = 1;
            let wolfAmountMax = 2;
            let wolfAmount = Math.floor(wolfAmountMin + (Math.random() * (wolfAmountMax - wolfAmountMin)));
            for (let i = 0; i < batAmount; i++) {
                bat = new Game.Bat();
                random = (Math.floor(Math.random() * Math.floor(levelSize))) - offset;
                bat.cmpTransform.local.translateX(random);
                //bat.cmpTransform.local.translateY(0);
                enemies.appendChild(bat);
            }
            for (let i = 0; i < wolfAmount; i++) {
                wolf = new Game.Wolf();
                random = (Math.floor(Math.random() * Math.floor(levelSize))) - offset;
                wolf.cmpTransform.local.translateX(random);
                //wolf.cmpTransform.local.translateY(0);
                enemies.appendChild(wolf);
            }
            for (let i = 0; i < witchAmount; i++) {
                witch = new Game.Witch();
                random = (Math.floor(Math.random() * Math.floor(levelSize))) - offset;
                witch.cmpTransform.local.translateX(random);
                //witch.cmpTransform.local.translateY(0);
                enemies.appendChild(witch);
            }
            for (let i = 0; i < golemAmount; i++) {
                golem = new Game.Golem();
                random = (Math.floor(Math.random() * Math.floor(levelSize))) - offset;
                golem.cmpTransform.local.translateX(random);
                //golem.cmpTransform.local.translateY(0);
                enemies.appendChild(golem);
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