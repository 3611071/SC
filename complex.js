function sendResult() {
  let myComplex = [];

  for (let i = 1; i < 6; i++) {
    for (let e = 0; e < 2; e++) {
      if (document.getElementsByName(`highload${i}`)[e].checked) {
        myComplex.push(e);
      }
    }
    if (myComplex.length != i) {
      document.getElementById("errorM").style.display = "block";
      return;
    }
  }

  const query = JSON.stringify({
    query: `
            mutation test {
              changeComplex(input: {
                  mo: ${myComplex[0]}
                  tu: ${myComplex[1]}
                  we: ${myComplex[2]}
                  th: ${myComplex[3]}
                  fr: ${myComplex[4]}
                }){
                  isCurrentWeek
                }
              }
            `,
  });
  makeRequest(query, getCookie("userKey")).then((res) => {
    try {
      if (res.data) {
        indow.location.replace("./complex.html");
      }
    } catch (e) {
    }
  });
}

const queryGet = JSON.stringify({
  query: `query getlc {
    getBackComplex(i: -1){
      orders
    }
  }`
})

makeRequest(queryGet, getCookie('userKey')).then(res => {
  for (let i = 1; i < 6; i++) {
    document.getElementsByName(`highload${i}`)[res.data.getBackComplex.orders[i-1]].checked = true;
  }
})