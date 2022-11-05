const form = document.getElementById('signup-form')

form.addEventListener('submit' , signup)

async function signup(e){
    e.preventDefault()

    const userDetails ={
        name:e.target.name.value ,
        email : e.target.email.value ,
        phone : e.target.phone.value,
        password :e.target.password.value
    }

    try {
        const response = await axios.post("http://localhost:3000/user/signup" , userDetails)
        console.log(response)
        if (response.status === 201){
            console.log('success');
            alert('Successfuly signed up')
            window.location.href='../login/login.html'
        }else{
            e.target.password.value='';
            console.log('bye')
        }
    } catch (err) {
       if(err.response.status == 409){
        alert('User already exist , Please Login')
       }
       else{
        console.log(err)
       }
    }
}