import {requestTime} from "../middlewares/time.js";
import {logger} from "../middlewares/logger.js";

export function setMiddlewares(app){
    app.use((req, res, next) => {
        console.log(req.url);
        next();
    });
    app.use(requestTime);
    app.use(logger);
}