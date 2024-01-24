const express = require("express");
const { TimeLogger } = require("./MIddleWare/Timelogger.middleware.js");
const Logger = require("./MIddleWare/Logger.middleware.js");
const addCode = require("./MIddleWare/addCode.middleware.js");
const fs = require("fs");
const app = express();
app.use(express.json())

// app.use(
//     // <<<<<<<<<<<<<<<<<<---------------using MW to restict some of the routes-------------------->>>>>>>>>>>>>>>>>

//     // (req, res, next) => {
//     //     (req.url==="/about") ? next() : (res.send("<h1>Rout not found<h1/>")) 
//     // }  

//     // <<<<<<<<<<<<<<<<<<---------------using MW to calculat time taken by server to send responce-------------------->>>>>>>>>>>>>>>>>
//     // TimeLogger

//     // <<<<<<<<<<<<<<<<--------------Using MW to track api end point method and date------------------------------------>>>>>>>>>>>>>>>>
//     // Logger

// )

app.get("/", (req, res) => {
    console.log("Home")
    res.send("<h1>Home Page<h1/>")
})
app.get("/about", (req, res) => {
    console.log("About")
    res.send("<h1>About Page<h1/>")
})

app.get("/contact", (req, res) => {
    console.log("Dashboard")
    res.send("<h1>Dashboard Page<h1/>")
})

app.get("/dashboard", (req, res) => {
    console.log("Dashboard")
    res.send("<h1>Dashboard Page<h1/>")
})
app.use(addCode)
app.post("/register", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    data.students.push(req.body)
    fs.writeFileSync("./db.json", JSON.stringify(data))
    res.send("new user added")
})

app.listen("4500", () => [
    console.log("live at 4500")
])