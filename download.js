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
  fetch("http://app:3000/download-table1", {
  }).then((res) => {});
});
