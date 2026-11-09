const optionNone = "none";

function noDisplay(elementId){
    document.getElementById(elementId).style.display = optionNone;
}

function renderStaticContent(elementId, data) {
    document.getElementById(elementId).innerHTML = data;
} 

function renderListItem(listId, item) {
    document.getElementById(listId)
	  .insertAdjacentHTML('beforeend', item);
}