const introductionAnimationButton = document.getElementById("introductionButton");

let selectedElement;

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

function setElementAnimation(elementId, animationClass){
    selectedElement = document.getElementById(elementId);

    selectedElement.classList.add(animationClass);
}