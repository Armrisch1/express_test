class AuthController{

    constructor() {
        this.authorize();
    };

    authorize(){
        app.use(function (req,res,next){
            if (req.session.user.id > 0){
                next();
            } else{
                throw new Error('403 Access denied');
            }
        });
    }
}

module.exports = AuthController;