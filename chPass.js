function chPass() {
    const i1 = document.getElementById('password1')
    const i2 = document.getElementById('password2')
    const i3 = document.getElementById('password3')

    if(i3.value !== i2.value){
        const errorM = document.getElementById('errorM');
        errorM.style.display = 'block';
        return
    }

    const query = {
        query: `
    mutation changePass {
        changePassword(lastPass: "\"" + ${i1.value} + "\"", newPass: "\"" + ${i2.value} + "\"")
      }
    `}

    makeRequest(query, getCookie('userKey')).then(res => {
        console.log(res)
        if(res.errors && res.errors.message === 'Wrong Password'){
            const errorM = document.getElementById('errorM');
            errorM.style.display = 'block';
            return
        }

        //document.location.replace('./index.html')
    })
}