const mongoose = require("mongoose");


const connection = async ()=>{

    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log("mongo db is connected");
        setTimeout(()=>{
            connect.disconnect()
            console.log("mongo db is disconnected!!")
        },10000)
    } catch (error) {
        console.log(error)
    }
}

connection();