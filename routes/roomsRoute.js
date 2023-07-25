const express  = require('express');
const router = express.Router();


const Room = require('../models/room');

router.get("/getallrooms",  async (req,res)=>{



try {
    const rooms  = await Room.find({}) 
    res.send(rooms);
} catch (error) {
    return res.status(400).json({message:error})
}

})
//Post is used to add a new data this was added to get roomid from mongodb when a certain hotel is clicked for booking
router.post("/getroombyid",  async (req,res)=>{


    const roomid = req.body.roomid


    try {
        const room  = await Room.findOne({_id:roomid})
        res.send(room);
    } catch (error) {
        return res.status(400).json({message:error})
    }
    
    })



module.exports = router;
