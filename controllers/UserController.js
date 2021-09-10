const bcrypt = require("bcrypt");
const User = require("../models/User");
const fs = require('fs');
const format = require(DIRNAME + '/helpers/date.js');
const {body, validationResult} = require('express-validator');


class UserController {
    constructor() {
        this.registerValidation = [

            body('birthday').isDate(),
            body('first_name').notEmpty(),
            body('last_name').notEmpty(),
            body('gender').isIn(['male', 'female']),
            body('phoneNumber').notEmpty(),
            body('email').isEmail().trim().custom(function (value, {req}) {
                return User.findOne({where: {'email': req.body.email}}).then(user => {
                    if (user) {
                        return Promise.reject('E-mail already in use');
                    }
                });
            }),
        ]
        this.loginValidation = [

            body('email').isEmail().trim().notEmpty(),
            body('password').isLength({min: 6}).trim().notEmpty(),
        ];
    }

    store(req, res) {
        req.body.birthday = format(req.body.birthday);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.array());
            return;
            // TODO redirect back with errors
        }

        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            req.body.password = hash;
            await fs.writeFile(DIRNAME + '/logs/log.txt', JSON.stringify(req.body) + "\r\n", {'flag': 'a'}, function (err) {
                if (err) {
                    throw err.message;
                } else {
                    console.log('log wrote');
                }
            });
            await User.create(req.body).then(r => res.redirect('/'));
        });
    };

    auth(req, res) {
        req.body.username = req.body.email;
        User.findOne({where: {'email': req.body.email}}).then((User) => {
            bcrypt.compare(req.body.password, User.password, async (err, result) => {
                if (result) {
                    await (function () {
                        req.session.user = {
                            id: User.id,
                            email: User.email,
                            firstName: User.first_name,
                            lastName: User.last_name,
                        }
                    }());

                    return res.redirect('/cabinet');
                } else {
                    await req.flash('error', 'wrong auth data');
                    res.redirect('/login')
                }
            });
        })
    };

    login(req, res) {
        res.render('login', {title: 'Login'});
    };

    register(req, res) {
        res.render('register', {title: 'Register'});
    }
}

module.exports = new UserController;