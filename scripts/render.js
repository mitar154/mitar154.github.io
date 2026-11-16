const optionNone = "none";

function noDisplay(elementId){
    document.getElementById(elementId).style.display = optionNone;
}

function addElementClass(elementId, className){
    document.getElementById(elementId).classList.add(className);
}

function renderText(elementId, text) {
    document.getElementById(elementId).textContent = text;
} 

function renderStaticContent(elementId, data) {
    document.getElementById(elementId).innerHTML = data;
} 

function renderListItems(listId, itemsData, tagsMap) {
    const ul = document.getElementById(listId);

    if (!ul) return;
  
    ul.innerHTML = '';
  
    itemsData.forEach(itemData => {
      const li = document.createElement('li');
  
      for (const [attribute, tag] of Object.entries(tagsMap)) {
        if (itemData[attribute] !== undefined) {
          const el = document.createElement(tag);
          el.textContent = itemData[attribute];
          li.appendChild(el);
        }
      }
  
      ul.appendChild(li);
    });
  }
