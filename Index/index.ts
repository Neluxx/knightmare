namespace Game {

  //import ƒ = FudgeCore;
  window.onload = init;

  let titlescreen: HTMLAudioElement;
  let play: boolean = false;

  function init(): void {

    loadMusic();
    
    document.getElementById('playButton').addEventListener('click', startGame);
    document.getElementById('muteButton').addEventListener('click', playTitlescreen);
    document.getElementById('openControlBoxButton').addEventListener('click', openControlBox);
    document.getElementById('closeControlBoxButton').addEventListener('click', closeControlBox);
    document.getElementById('openSettingBoxButton').addEventListener('click', openSettingBox);
    document.getElementById('closeSettingBoxButton').addEventListener('click', closeSettingBox);
  }

  function loadMusic(): void {
    titlescreen = new Audio();
    titlescreen.src = "../Assets/Sounds/Music/titlescreen.wav";
    titlescreen.load();
  }

  function startGame(): void {
    window.open('../Game/game.html', '_self', "fullscreen=yes", true);
  }

  function playTitlescreen(): void {
    let mute = document.getElementById('muteButton') as HTMLImageElement;

    if (!play) {
      mute.src = "../Assets/UI/muteOff.png"
      titlescreen.loop = true;
      titlescreen.play();
      play = true;
    }
    else if (play) {
      mute.src = "../Assets/UI/muteOn.png"
      titlescreen.loop = true;
      titlescreen.pause();
      play = false;
    }
  }

  function openControlBox(): void {
    document.getElementById('controlBox').style.visibility = 'visible';
    document.getElementById('menu').style.visibility = 'hidden';
  }

  function closeControlBox(): void {
    document.getElementById('controlBox').style.visibility = 'hidden';
    document.getElementById('menu').style.visibility = 'visible';
  }

  function openSettingBox(): void {
    document.getElementById('settingBox').style.visibility = 'visible';
    document.getElementById('menu').style.visibility = 'hidden';
  }

  function closeSettingBox(): void {
    document.getElementById('settingBox').style.visibility = 'hidden';
    document.getElementById('menu').style.visibility = 'visible';
  }
}