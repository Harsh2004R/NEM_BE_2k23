const TimeLogger = (req, res, next) => {

    const initialTime = new Date().getTime();
    next();
    const endTime = new Date().getTime();
    
    console.log(`time taken by server is ${endTime - initialTime} ms`)

}
module.exports = { TimeLogger };