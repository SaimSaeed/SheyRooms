import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container,Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
function AdminRooms() {

  const [rooms, setRooms] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  useEffect(() => {
    const getRooms = async () => {
    try {
      setLoading(true)
      const res = await axios.get("http://localhost:5000/api/rooms/getallrooms")
      setRooms(res.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
    }
    getRooms()
  }, [])

  return (
    <Container>
      <h2 className='my-3'>All Rooms</h2>
     {loading ? <Loader/> : error ? <Error/> :
     <Table striped responsive hover className='table-sm' >
      
      <thead>
        <tr>
          <th>ID</th>
          <th>ROOM</th>
          <th>TYPE</th>
          <th>RENT PER DAY</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room)=>{
         return <tr key={room._id}>
            <td>{room._id}</td>
            <td>{room.name.substring(0,30)}</td>
            <td>{room.type}</td>
            <td>{room.rentperday}</td>
            {/* <td>{booking.totalamount}</td> */}
            <td><Link to={`/room/${room._id}`} className=' btn btn-dark'>Details</Link></td>
          </tr>
        })}
      </tbody>
      
      
      </Table>}
    </Container>
  )
}

export default AdminRooms