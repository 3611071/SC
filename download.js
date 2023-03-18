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
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "http://app:3000/",
    },
  }).then((res) => {});
});
