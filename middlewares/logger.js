import colors from "colors";

export function logger(req, res, next){
    console.log(colors.bgYellow.black(`Request time is : ${req.requestTime}`));

    next();
}