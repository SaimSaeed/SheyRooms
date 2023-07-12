import React, { useState, useEffect } from 'react';
import axios from "axios";
const baseUrl = "http://localhost:5000/api/rooms/getallrooms";

function Homescreen() {

    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState()
    const [error, seterror] = useState()


    useEffect(() => {
        try {
            setloading(true)
            axios.get(baseUrl).then((res) => {
                setrooms(res.data)
            })
            setloading(false)
        } catch (error) {
            seterror(true)
            console.log(error)
            setloading(false)
        }

    }, []);




    return (
        <div>
            {/* <h1 className='text-center'>Home Screen</h1>
            <h1 className='text-center'> There are total {rooms.length} rooms </h1> */}
            {loading ? <h1>Loading.....</h1>: error ? (<h1>Error</h1>) : (rooms.map(room=>{
return <h1 className='text-center'>{room.name}</h1>
            }))}
        </div>
    )
}

export default Homescreen;