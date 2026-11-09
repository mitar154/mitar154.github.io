async function fetchText(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const text = await response.text();
      
      console.log(text);
      return text;
    } catch (error) {
        logError(error);
    }
  }

  async function fetchJSON(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const text = await response.json();
      
      console.log(text);
      return text;
    } catch (error) {
        logError(error);
    }
  }

  function logError(error) {
    console.error('There was a problem reading the file:', error);
  }