// First thing for today is I am gonna learn how to make a express server.
// After that i will make a get request to our express server.
// At the end I'll make a post request to our express server



const express = require("express");
const fs = require("fs");
let app = express();
app.use(express.json());

// making a get request to our express server to get some dummy data from db.json.
app.get("/", (req, res) => {
    // res.send("Hello, this is a basic Express server!");
    let displayData = fs.readFile("./db.json", "utf-8", (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
        console.log(displayData);

    })
})

// making a post request to our express server to post some dummy data inside db.json.
app.post("/add/post", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, result) => {
        if (err) throw err;
        const jsonData = JSON.parse(result);

        const addedData = {
            id: jsonData.data.length + 1,
            name: req.body.name
        }
        jsonData.data.push(addedData);

        fs.writeFile("./db.json", JSON.stringify(jsonData, null, 2), (err) => {
            if (err) throw err;
            console.log("Data has been added successfully!");

            // Send a response
            res.send(jsonData);
        });

    })
})

let port = "4500";
let ip = "198.128.68.1";

app.listen(port, () => {
    console.log(`server is live at ${port}`);
})