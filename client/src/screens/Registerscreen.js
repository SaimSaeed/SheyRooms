import React , {useState}from 'react'
import axios from 'axios'

function Registerscreen() {


const [name,setname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [cpassword,setcpassword]=useState('')


 async function register(){
if(password===cpassword){
    const user ={
        name,
        email,
        password,
        cpassword
    }
    try {
        const result = await axios.post('http://localhost:5000/api/users/register',user).data
    } catch (error) {
        console.log(error)
    }
}
else{
    alert("Passwords Not Match!")
}


}







  return (
    <div>

<div className='row justify-content-center mt-5'> 

<div className='col-md-5'>

<div className='bs border'>
    <h1 className='text-center'>Register</h1>
    <input   type='text' className='form-control' placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
    <input   type='text' className='form-control' placeholder='Email'  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
    <input   type='text' className='form-control' placeholder='Password'  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
    <input   type='text' className='form-control' placeholder='Confirm Password'  value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
    <button className='btn btn-dark mt-3' onClick={register}>Register</button>
</div>




</div>

</div>

    </div>
  )
}

export default Registerscreen