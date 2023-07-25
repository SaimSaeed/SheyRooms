const express = require("express");
const app  = express();
var cors = require('cors')
const roomsRoute = require("./routes/roomsRoute")
const usersRoute = require("./routes/usersRoute")


app.use(express.json())  //this is necessary to be added other wise roomid will not be fetched to body
app.use("/api/rooms",cors(),roomsRoute)
app.use("/api/users",cors(),usersRoute)



const dbConfig = require('./db');

const port  =process.env.PORT || 5000;
app.listen(port, 
   () => console.log(`The server is running ${port}`)
    )
