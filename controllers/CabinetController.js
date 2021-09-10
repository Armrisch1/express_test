const AuthController = require('./AuthController.js');

class CabinetController extends AuthController{

    index (req, res){
        console.log(req.session);
        res.render('cabinet/index', {
            title : 'Cabinet',
            userFullName : req.session.user.firstName + " " + req.session.user.lastName
        });
    };
}

module.exports = new CabinetController();