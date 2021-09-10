const colors = require('colors');

function logger(req, res, next){
    console.log(colors.bgYellow.black(`Request time is : ${req.requestTime}`));

    next();
}

module.exports = {
    logger : logger
}