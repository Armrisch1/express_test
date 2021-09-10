require('./components/env.js');
require('./components/middlewares.js');
require('./components/router.js');

app.listen(PORT, function(){
    console.log('Server is run!');
});