const express = require("express");

const app  = express();

const roomsRoute = require("./routes/roomsRoute")


app.use("/api/rooms",roomsRoute)



const dbConfig = require('./db');

const port  =process.env.PORT || 5000;
app.listen(port, 
   () => console.log(`The server is running ${port}`)
    )
