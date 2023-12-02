// <<<<<<<<--------------------First thing for today --------------------------->>>>>>>>>>>>>>>>>>>


//  This is my day3 today I'll be making http server.
// to get rid of restarting my server every time i made changes.
// i am using external module named : "nodemon". 

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-type","text/html")
        res.end("<h1>This is your home page<h1/>");
    } else if (req.url === "/about") {
        res.end("This is your about page");
    } else if (req.url === "/skills") {
        res.end("This is your skills page");

    } else if (req.url === "/contact") {
        res.end("This is your contact page");
    } else if (req.url === "/users") {
        try {
            const usersData = fs.readFileSync("./db.json", "utf-8")
            res.end(usersData)
        } catch (error) {
            res.end(error)
        }

    } else {
        res.end("Url not found")
    }
})

server.listen(4500, () => {
    console.log("server is running on port 4500")
})



// <<<<<<<<--------------------Second thing for today --------------------------->>>>>>>>>>>>>>>>>>>



// now want to get actual data from db.
// (i) to do that i will make a db.json firl with some dummy data.
// (ii) now i will read that data using "fs" inbuild modul.
// (iii) and in last step I'll read my db.jsom to get actaul data.

