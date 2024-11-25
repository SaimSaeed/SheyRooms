import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container,Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
function AdminUsers() {

  const [users, setUsers] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
    try {
      setLoading(true)
      const res = await axios.get("http://localhost:5000/api/users/")
      setUsers(res.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
    }
    getUsers()
  }, [])
console.log(users)
  return (
    <Container>
      <h2 className='my-3'>All Users</h2>
     {loading ? <Loader/> : error ? <Error/> :
     <Table striped responsive hover className='table-sm' >
      
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ADMIN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>{
         return <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? "YES" : "NO"}</td>

            <td><Link to={`/user/${user._id}`} className=' btn btn-dark'>Details</Link></td>
          </tr>
        })}
      </tbody>
      
      
      </Table>}
    </Container>
  )
}

export default AdminUsers