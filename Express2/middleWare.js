let color = require('colors')

function requestTime(req,res,next) {
    req.requestTime = Date.now()
    next() 
}
 function logger(req,res,next){
    console.log(color.bgWhite.red(`req.requestTime : ${req.requestTime}`))
    next()
}

module.exports = {
    logger: logger,
    requestTime : requestTime
}