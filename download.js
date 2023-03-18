makeRequest(
  JSON.stringify({
    query: `
    query check {
        complexesList
      }
      `,
  }),
  ""
).then((res) => {
  fetch("http://178.47.46.58/download-table1", {
  }).then((res) => {});
});
