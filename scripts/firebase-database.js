const DATABASE_URL = "https://mitargithubpages-default-rtdb.firebaseio.com/";

async function fetchData(path = "") {
  try {
    const response = await fetch(`${DATABASE_URL}/${path}.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data === null) {
      console.log("No data found at this path.");
      return null;
    }

    console.log("Successfully fetched data:", data);
    return data;

  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

async function displayData(relativePath) {
    const data = await fetchData(relativePath);
    if (!data) return;
  
    const dataList = Object.entries(data).map(([id, details]) => ({
      id: id,
      ...details
    }));
  
    return dataList;
  }