import React, { useState, useEffect } from 'react';
import axios from "axios";
import Room from "../components/Room"
import Loader from '../components/Loader';
import Error  from '../components/Error';

function Homescreen() {
    // const baseUrl = "http://localhost:5000/api/rooms/getallrooms";
    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()


    // useEffect(() => {
    //     try {
    //         setloading(true)
    //         axios.get(baseUrl).then((res) => {
    //             setrooms(res.data)
    //             setloading(false)
    //         })
           
    //     } catch (error) {
    //         setloading(false)
    //         seterror(true)
            
            
    //     }

    // }, []);



    useEffect(() => {
        const myFunction = async () => {
            try {
                setloading(true);
                const data = (await axios.get("http://localhost:5000/api/rooms/getallrooms")).data;
                setrooms(data)
                setloading(false)
            } catch (error) {
                setloading(false)
                seterror(true)

            }

        }

        myFunction()

    }, []);




    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                {loading ? (<Loader/>) : error ? (<Error/>) : (rooms.map(room => {
                    return <div className='col-md-9 mt-2'>

                        <Room  room={room}/>


                    </div>
                }))}
            </div>

        </div>
    )
}

export default Homescreen;