
document.getElementById('forget-form').onsubmit = async(e)=>{
    e.preventDefault();
    const details ={
        email:e.target.email.value
    }

    console.log(details)
    try {
        let response = await axios.post('http://localhost:3000/password/forgotpassword' , details)
        if(response.status === 202){
            alert('mail successfully sent');
        }else {
            throw new Error('Something went wrong!!!')
        }
    } catch (err) {
        document.body.innerHTML += `<div style="color:red;text-align:center;margin-top:70px;">${err} <div>`;
    }
}