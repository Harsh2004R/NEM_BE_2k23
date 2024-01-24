const addCode = ((req, res, next) => {

    const newCode = Math.floor(Math.random() * 100);
    req.body.studentCode = newCode
    next()
})
module.exports=addCode;