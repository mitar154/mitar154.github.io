const miscellaneousPageContentUrl = "";
const testData = `<i>Test content:</i> 
<h1>Some heading</h1> 
<h2>Some another heading</h2> 
<p>Some paragraph.</p> 
<p>Some another paragraph.</p>`;

renderMiscellaneousPageContent();

function fetchMiscellaneousPageContent(url){
  return testData
}

function renderMiscellaneousPageContent() {
    let data = fetchMiscellaneousPageContent(miscellaneousPageContentUrl);
    
    renderStaticContent("dynamicContent", data);
}
