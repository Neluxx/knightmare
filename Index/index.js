"use strict";
var Game;
(function (Game) {
    //import ƒ = FudgeCore;
    window.onload = init;
    let titlescreen;
    let volumeInput;
    let play = false;
    function init() {
        loadMusic();
        document.getElementById("playButton").addEventListener("click", startGame);
        document.getElementById("muteButton").addEventListener("click", playTitlescreen);
        document.getElementById("openControlBoxButton").addEventListener("click", openControlBox);
        document.getElementById("closeControlBoxButton").addEventListener("click", closeControlBox);
        document.getElementById("openSettingBoxButton").addEventListener("click", openSettingBox);
        document.getElementById("closeSettingBoxButton").addEventListener("click", closeSettingBox);
        volumeInput = document.getElementById("volumeInput");
        volumeInput.addEventListener("change", updateVolume);
    }
    function updateVolume() {
        sessionStorage.setItem("volume", volumeInput.value);
        console.log(volumeInput.value);
    }
    function loadMusic() {
        titlescreen = new Audio();
        titlescreen.src = "../Assets/Sounds/Music/titlescreen.wav";
        titlescreen.load();
    }
    function startGame() {
        window.open("../Game/game.html", "_self", "fullscreen=yes", true);
    }
    function playTitlescreen() {
        let mute = document.getElementById("muteButton");
        if (!play) {
            mute.src = "../Assets/UI/muteOff.png";
            titlescreen.loop = true;
            titlescreen.play();
            play = true;
        }
        else if (play) {
            mute.src = "../Assets/UI/muteOn.png";
            titlescreen.loop = true;
            titlescreen.pause();
            play = false;
        }
    }
    function openControlBox() {
        document.getElementById("controlBox").style.visibility = "visible";
        document.getElementById("menu").style.visibility = "hidden";
    }
    function closeControlBox() {
        document.getElementById("controlBox").style.visibility = "hidden";
        document.getElementById("menu").style.visibility = "visible";
    }
    function openSettingBox() {
        document.getElementById("settingBox").style.visibility = "visible";
        document.getElementById("menu").style.visibility = "hidden";
    }
    function closeSettingBox() {
        document.getElementById("settingBox").style.visibility = "hidden";
        document.getElementById("menu").style.visibility = "visible";
    }
})(Game || (Game = {}));
//# sourceMappingURL=index.js.map