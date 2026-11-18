let author = "Mitar Deretić";

setFooterText();

function getCurrentYear(){
    return new Date().getFullYear();
}

function getAuthor(){
    return author;
}

function setFooterText(){
    renderText("siteAuthor", getAuthor() + " " + getCurrentYear());
}