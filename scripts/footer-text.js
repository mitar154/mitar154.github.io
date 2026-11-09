const footerText = document.getElementById("author");
let author = "Mitar Deretić";

setFooterText();

function getCurrentYear(){
    return new Date().getFullYear();
}

function getAuthor(){
    return author;
}

function setFooterText(){
    renderStaticContent("author", getAuthor() + " " + getCurrentYear());
}