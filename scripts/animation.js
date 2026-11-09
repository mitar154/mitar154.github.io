let selectedElement;

function setElementAnimation(elementId, animationClass){
    selectedElement = document.getElementById(elementId);

    selectedElement.classList.add(animationClass);
}