import {setConfig} from "./components/env.js";
import {setRoutes} from "./components/router.js";
import {setMiddlewares} from "./components/middlewares.js";

setConfig();
setMiddlewares(app);
setRoutes(app);

app.listen(PORT, function(){
    console.log('Server is run!');
});