import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Error from '../components/Error'

function Bookingscreen() {

    const [room, setroom] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    const { roomid } = useParams()   //Params are used to replace match.params.roomid which was used in react-router-dom older versions






    useEffect(() => {
        const myFunction = async () => {
            try {
                setloading(true);
                const data = (await axios.post("http://localhost:5000/api/rooms/getroombyid", { roomid })).data;
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
        <div className='mx-5'>

            {loading ? (<Loader/>) : error ? (<Error/>) : (<div className='container-fluid'>



                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-6'>
                        <h4>{room.name}</h4>
                        <img className='bigimg' alt='booking' src={room.imageurls[0]} style={{ height: "360px", width: "auto", border: "1px solid transparent", borderRadius: "5px" }} />
                    </div>
                    <div className='col-md-6'>
                        <div style={{textAlign:"right"}}>
                            <h4>Booking Details</h4>
                            <hr />
                            <b>
                                <p>Name:</p>
                                <p>From Date:</p>
                                <p>To Date:</p>
                                <p>Max Count:{room.maxcount}</p>
                            </b>
                        </div>

                        <div  style={{textAlign:"right"}}>
                            <h4>Amount</h4>
                            <hr />

                            <b>
                                <p>Total Days:</p>
                                <p>Rent Per Day:{room.rentperday}</p>
                                <p>Total Amount:</p>
                            </b>

                        </div>


                        <div>
                            <button className='btn btn-dark' style={{float:"right"}}>
                                Pay Now
                            </button>
                        </div>


                    </div>
                </div>








            </div>)}















        </div>
    )
}

export default Bookingscreen