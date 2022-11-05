const form = document.getElementById('signup-form')

form.addEventListener('submit' , signup)

async function signup(e){
    e.preventDefault()

    const loginDetails ={
        email : e.target.email.value ,
        password :e.target.password.value
    }

   

    try {
        const response = await axios.post("http://localhost:3000/user/login" , loginDetails)
        if (response.status === 200){
            localStorage.setItem('userToken' , response.data.token)
            localStorage.setItem('name' , response.data.name)
            console.log(response.data.token)
            alert('User login success')
            window.location.href = '../group/group.html'
            
        }else{
            e.target.password.value='';
            console.log('bye')
        }
    } catch (err) {
        console.log(err)
       if(err.response.status == 400){
        alert('Enter all fields')
       }if(err.response.status == 404){
        alert('User not found , Please create an account')
       }if(err.response.status == 401){
        alert('User not authorized')
       }
       else{
        console.log(err)
       }
    }
}