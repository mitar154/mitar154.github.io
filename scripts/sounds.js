const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const soundIcon = document.getElementById("soundIcon");

introductionAnimationButton.addEventListener('pointerdown', playBackgroundMusic);
musicButton.addEventListener('pointerdown', handleBackgroundMusic);

let isBgMusicActive = false;
let soundVolume = 0.3;
backgroundMusic.volume = soundVolume;

const soundOnIconClassName = "fa-volume-up";
const soundOffIconClassName = "fa-volume-mute";

function handleBackgroundMusic(){
    if(isBgMusicActive){
        stopBackgroundMusic();
    }
    else {
        playBackgroundMusic();
    }
}

function playBackgroundMusic(){
    backgroundMusic.play();
    soundIcon.classList.remove(soundOffIconClassName);
    soundIcon.classList.add(soundOnIconClassName);
    isBgMusicActive = true;
}

function stopBackgroundMusic(){
    backgroundMusic.pause();
    soundIcon.classList.remove(soundOnIconClassName);
    soundIcon.classList.add(soundOffIconClassName);
    isBgMusicActive = false;
}