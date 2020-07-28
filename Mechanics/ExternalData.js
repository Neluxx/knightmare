"use strict";
var Game;
(function (Game) {
    async function loadJSON() {
        console.log("Start load");
        let content = await load("../ExternalData/data.json");
        console.log("Done load");
        console.log(content);
        return content;
    }
    Game.loadJSON = loadJSON;
    async function load(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return (json);
    }
})(Game || (Game = {}));
//# sourceMappingURL=ExternalData.js.map