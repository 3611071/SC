function quit(){
    setCookie('userKey', '');
    window.location.replace('./sign_in.html');
}

makeRequest(`
query myQuery{
    me{
      name
      lastName
      avatarUrl
      class {
        number
        letter
      }
    }
  }
`, getCookie('userKey')).then(res => {
    const nameP = document.getElementById('nameP');
    const className = document.getElementById('className');
    const photo = document.getElementById('profile_photo');
    nameP.innerHTML = res.data.me.lastName + ' ' + res.data.me.name;
    className.innerHTML = 'Ученик, класс ' + res.data.me.class.number + res.data.me.class.letter;
    photo.style.backgroundImage = `url(${res.data.me.avatarUrl})`;
})

const myKey = getCookie('userKey');

if(myKey != undefined){
  const query = `query myQuery{
    validUser
  }`

  makeRequest(query, getCookie('userKey')).then(res => {
    if(!res.data.validUser) window.location.replace('./sign_in.html');
  })
}