function login() {
  const email = document.getElementById('login');
  const pass = document.getElementById('password');

  const query = JSON.stringify({
    query: `mutation Login{ 
    loginUser(input: { 
      login: \"${email.value}\" 
      password: \"${pass.value}\" 
    }) 
    { 
      token 
    } 
  }`});

  makeRequest(query, '').then(res => {
    try {
      if (res.errors[0].message == 'Wrong data') {
        const errorM = document.getElementById('errorM');
        errorM.style.display = 'block';
      }
    }
    catch (e) {
      setCookie('userKey', res.data.loginUser.token);
      window.location.replace('./index.html');
    }
  });
}

const myKey = getCookie('userKey');

if (myKey != undefined) {
  const query = JSON.stringify({
    query: `query myQuery{
    validUser
  }`})

  makeRequest(query, getCookie('userKey')).then(res => {
    if (res.data.validUser) window.location.replace('./index.html');
  })
}