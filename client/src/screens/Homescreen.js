import React , {useState,useEffect} from 'react';
import axios from "axios";
const baseUrl = "http://localhost:5000/api/rooms/getallrooms";

function Homescreen() {

    const [rooms,setrooms] = useState([])
console.log(rooms);

    useEffect(()=>{
axios.get(baseUrl).then((res)=>{
    setrooms(res.data)
})
    },[]);




  return (
    <div>
<h1 className='text-center'>Home Screen</h1>
<h1 className='text-center'> There are total {rooms.length} rooms </h1>
    </div>
  )
  }

export default Homescreen;