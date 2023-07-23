import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Bookingscreen({ match }) {

    const [room, setroom] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    const {roomid}= useParams()

  



    
    useEffect( () => {
        const myFunction=  async() =>  {
            try {
                setloading(true);
                const data = (await axios.post("http://localhost:5000/api/rooms/getroombyid", {roomid})).data;
                setroom(data)
                setloading(false)
            } catch (error) {
                setloading(false)
                seterror(true)
             
            }
            
         }
     
myFunction()

    }, []);


    return (
        <>

            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>) : (<div>



                <div className='row container'>
                    <div className='col-md-5'>
                        <h1>{room.name}</h1>
                        <img className='bigimg' src={room.imageurls[0]}/>
                    </div>
                    <div className='col-md-5'>

                    </div>
                </div>








            </div>)}


            












        </>
    )
}

export default Bookingscreen