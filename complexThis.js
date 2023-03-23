const queryGet = JSON.stringify({
    query: `query getlc {
      getBackComplex(i: -2){
        orders
      }
    }`
  })
  
  makeRequest(queryGet, getCookie('userKey')).then(res => {
    for (let i = 1; i < 6; i++) {
      document.getElementsByName(`highload${i}`)[res.data.getBackComplex.orders[i-1]].checked = true;
    }
  })