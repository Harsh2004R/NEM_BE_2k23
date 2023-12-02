// --------------> First thing for today <------------------



// in this file i am using a internal node modules to check a number it it even or not
//  if i found a even number isEven function will return me a boolen value "true" else it 
//  will return me "false".

var isEven = require('is-even');
console.log(isEven(18));


// --------------> Second thing for today <------------------


// In this section i will use FS method (from node) to read and append a text into a txt file.
// i am taking a refference from "https://nodejs.org/dist/latest-v20.x/docs/api/fs.html" here.


// here i am gonna read my read.txt file content.
const fs = require("fs");

fs.readFile("./read.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});

