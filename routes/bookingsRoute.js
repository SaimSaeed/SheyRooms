const express  = require('express');
const router = express.Router()
const Booking = require("../models/booking")
const moment = require( "moment")
const Room = require ("../models/room")

router.post("/bookroom", async (req,res)=>{
// Requesting valuses from body or frontend
const {
    room,
    userid,
    fromdate,
    todate,
    totaldays,
    totalamount,
    } = req.body

// Making an object that can store room values and details for booking
    try {
        const newbooking = new Booking({
            room: room.name,
            roomid:room._id,
            userid,
            fromdate:moment(fromdate).format("DD-MM-YYYY"),
            todate:moment(todate).format("DD-MM-YYYY"),
            totaldays,
            totalamount,
            transactionid:"1234"
        })
// Saving Room Booking Details
        const booking = await newbooking.save()
       
        // Getting rooms models Room values and details
const roomtemp = await Room.findOne({_id:room._id})
// Pushing Values to Current Bookings array in Room Model
roomtemp.currentbookings.push({
    bookingid:booking._id,
     fromdate:moment(fromdate).format("DD-MM-YYYY"),
     todate:moment(todate).format("DD-MM-YYYY"),
    userid:userid,
    status: booking.status
    })
    await roomtemp.save()
    

    } catch (error) {
        return res.status(400).json({message:error})
    }

})

module.exports = router;