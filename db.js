const mongoose = require("mongoose");

const mongoUrl  ='mongodb+srv://saimsaeed:lofty7610@cluster0.mthnjmc.mongodb.net/mern-rooms';

mongoose.connect(mongoUrl, {useUnifiedTopology: true,useNewUrlParser:true })

var connection = mongoose.connection;


connection.on('error',()=>{
    console.log("MongoDB Connection Failed");
})

connection.on('connected',()=>{
    console.log("MongoDB Connection Successful");
})

module.exports = mongoose;
