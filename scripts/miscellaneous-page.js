fetchData("miscellaneous_page").then((result) => {
  renderStaticContent("dynamicContent", result.value);
});
