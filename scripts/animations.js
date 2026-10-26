const introductionAnimationButton = document.getElementById("introductionButton");

let selectedElement;

introductionAnimationButton.addEventListener('pointerdown', startIntroductionAnimation);

function startIntroductionAnimation(){
    backgroundMusic.play().then(() => {
        isBgMusicActive = true;
        noDisplay("introductionButton");
    }).catch(error => {
        console.log("Browser has blocked the audio:", error);
    });

    noDisplay("introductionGreeting");
    noDisplay("introductionImage");

    setElementAnimation("blackScreen", "trigger-fade-out");
    setTimeout(() => {
        noDisplay("blackScreen");
    }, 1400);
}

function setElementAnimation(elementId, animationClass){
    selectedElement = document.getElementById(elementId);

    selectedElement.classList.add(animationClass);
}