const express  = require('express');
const router = express.Router();


const Room = require('../models/room');
const roomModel = require('../models/room');

router.get("/getallrooms",  async (req,res)=>{



try {
    const rooms  = await Room.find({}) 
    res.send(rooms);
} catch (error) {
    return res.status(400).json({message:error})
}

})

router.get("/:id",(req,res)=>{
  
})


router.delete("/:id",async (req,res)=>{
  try {
     await roomModel.deleteOne({_id:req.params.id})
     return res.status(200).json("Deleted Successfully!")
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.put("/:id",(req,res)=>{
  
})

router.post("/create",async (req,res)=>{
    try {
         const room = new roomModel({
            name:"Default Room Name",
            description:"Default Description",
            type:"Default Type",
            rentperday: 1000,
            phonenumber: 920000000000,
            currentbookings:[],
            maxcount:3,
            imageurls:[]
         })
         room.save()
         return res.status(200).json("Room Created Successfully!")
    } catch (error) {
        return res.status(500).json(error)
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
