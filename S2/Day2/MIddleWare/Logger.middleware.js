const fs = require("fs");
const Logger = (req,res,next)=>{
    fs.appendFileSync("./log.text" ,`\n API EndPoint : ${req.url} | Method : ${req.method} | Date:${Date()}`)
    next()
}
module.exports = Logger;