const introductionAnimationButton = document.getElementById("introductionButton");

introductionAnimationButton.addEventListener('pointerdown', startIntroductionAnimation);

function startIntroductionAnimation(){
    noDisplay("introductionGreeting");
    noDisplay("introductionImage");
    noDisplay("introductionButton");

    setElementAnimation("blackScreen", "trigger-fade-out");
    setTimeout(() => {
        noDisplay("blackScreen");
    }, 1400);
}