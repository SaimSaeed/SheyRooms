const express = require("express");
const app  = express();
var cors = require('cors')
const roomsRoute = require("./routes/roomsRoute")


app.use("/api/rooms",cors(),roomsRoute)



const dbConfig = require('./db');

const port  =process.env.PORT || 5000;
app.listen(port, 
   () => console.log(`The server is running ${port}`)
    )
