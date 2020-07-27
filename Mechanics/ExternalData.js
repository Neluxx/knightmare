"use strict";
var Game;
(function (Game) {
    class ExternalData {
        async loadJSON() {
            //load data
            //const fs = require('file-system');
            //var data = fs.readFileSync("../ExternData/data.json");
            let rawData = await fetch("../ExternData/data.json");
            this.data = JSON.parse(await rawData.text());
            return this.data;
        }
    }
    Game.ExternalData = ExternalData;
})(Game || (Game = {}));
//# sourceMappingURL=ExternalData.js.map