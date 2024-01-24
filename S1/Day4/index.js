const express = require("express");
const app = express();

// app.use(express.text())
app.use(express.json())
app.get("/",(req,res)=>{
    res.end("Home page")
})
app.post("/add",(req,res)=>{
    console.log(req.body)
    res.end("new item is added!")
})
app.listen(4500,()=>{
    console.log("server is live at 4500");
})