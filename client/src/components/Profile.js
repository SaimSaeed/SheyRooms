import React,{useState} from 'react'
import {Form,FormControl,Button, Container} from "react-bootstrap"
function Profile({parsedUser}) {
  const [username,setUsername] = useState(parsedUser.name)
  const [email,setEmail] = useState(parsedUser.email)
  const [password,setPassword] = useState("")
  const [cPassword,setCPassword] = useState("")
  return (
    
    <Container>
      <h2 className='my-2 text-center'>My Profile</h2>
                    <Form className='w-50 mx-auto'>
                        <Form.Label id='username' className='my-1'>Username</Form.Label>
                        <FormControl type="text" name='username' placeholder='Username...' value={username}>
                        </FormControl>
                        <Form.Label id='email' className='my-1'>Email</Form.Label>
                        <FormControl type="text" name='email' placeholder='Email...' value={email}>
                        </FormControl>
                        <Form.Label id='password' className='my-1'>Password</Form.Label>
                        <FormControl type="password" name='password' placeholder='Password...'>
                        </FormControl>
                        <Form.Label id='cpassword' className='my-1'>Confirm Password</Form.Label>
                        <FormControl type="password" name='cpassword' placeholder='Confirm Password...'>
                        </FormControl>
                        <Button type="submit" variant='dark' className='my-3'>Update</Button>
                    </Form>
    
   </Container>
  )
}

export default Profile