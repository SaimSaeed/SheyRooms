import React, { useState, useEffect } from 'react';
import axios from "axios";
import Room from "../components/Room"
import Loader from '../components/Loader';
import Error  from '../components/Error';
import { DatePicker, Space } from 'antd';
// import moment from "moment"
const { RangePicker } = DatePicker;

function Homescreen() {
    // const baseUrl = "http://localhost:5000/api/rooms/getallrooms";
    // States for Rooms
    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    // Creating two Hooks for Date Handling 
    const [fromDate,setFromDate]  = useState()
    const [toDate,setToDate]  = useState()


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


// USe Effect for Fetching All Rooms From MongoDB
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


    const filterByDate= (dates)=>{

// console.log(dates[0].format("DD-MM-YYYY"))
// console.log(dates[1].format("DD-MM-YYYY"))
setFromDate(dates[0].format("DD-MM-YYYY"))
setToDate(dates[1].format("DD-MM-YYYY"))


    }


    return (
        <div className='container'>
<div className='row'>
<div className='col-md-3 mt-5'>
    {/* Setting up date picker and its format  */}
<RangePicker  format={"DD-MM-YYYY"} onChange={filterByDate}/>
</div>


</div>





            <div className='row justify-content-center mt-5'>
                {loading ? (<Loader/>) : error ? (<Error/>) : (rooms.map(room => {
                    return <div className='col-md-9 mt-2'>

                        <Room  room={room} fromDate={fromDate} toDate={toDate}/>


                    </div>
                }))}
            </div>

        </div>
    )
}

export default Homescreen;