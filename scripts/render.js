const optionNone = "none";
const footerText = document.getElementById("author");
let author = "Mitar Deretić";

function noDisplay(elementId){
    document.getElementById(elementId).style.display = optionNone;
}

setFooterText();

function getCurrentYear(){
    return new Date().getFullYear();
}

function getAuthor(){
    return author;
}

function setFooterText(){
    renderText("author", getAuthor() + " " + getCurrentYear());
}

function renderText(elementId, text){
    document.getElementById(elementId)
	  .insertAdjacentHTML('beforeend', text);
}

function renderListItems(items){
    
}