import React , {useState}from 'react'
import axios from 'axios'


 function Loginscreen() {

const [email,setemail]=useState('')
const [password,setpassword]=useState('')

async function login(){

    const user ={
       
        email,
        password
        
    }
    
    try {
        const result = await axios.post('http://localhost:5000/api/users/login',user).data
    } catch (error) {
        console.log(error)
    }

}










  return (
    <div>

<div className='row justify-content-center mt-5'> 

<div className='col-md-5'>

<div className='bs border'>
    <h1 className='text-center'>Login</h1>
    <input   type='text' className='form-control' placeholder='Email'  value={email} onChange={(e)=>{setemail(e.target.value)}}/>
    <input   type='text' className='form-control' placeholder='Password'  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
    <button className='btn btn-dark mt-3' onClick={login}>Login</button>
</div>




</div>

</div>

    </div>
  )
  }

export default Loginscreen