import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import Error from '../components/Error'
function Loginscreen() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState()

  async function login() {
    
    const user = {

      email,
      password

    }
    try {
      setloading(true);
      const result = await (await axios.post('http://localhost:5000/api/users/login', user)).data
      setloading(false);
      localStorage.setItem("currentUser", JSON.stringify(result))  //In Local Storage we cannot define an array or object so that's why we will stringify the data
      window.location.href = "/home"


    } catch (error) {
      console.log(error)
      setloading(false);
      seterror(true)
    }


  }






  return (
    <div>

      {loading && (<Loader />)}
      {error && (<Error message={"Invalid Credentials"}/>)}
      <div className='row justify-content-center mt-5'>

        <div className='col-md-5'>
          
          <div className='bs border'>
            <h1 className='text-center'>Login</h1>
            <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type='text' className='form-control' placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />

            <button className='btn btn-dark mt-3' onClick={login} >Login</button>
          </div>




        </div>

      </div>

    </div>
  )
}

export default Loginscreen