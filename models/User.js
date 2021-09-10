const sequelize = DB;
const {DataTypes, Model} = require('sequelize');


class User extends Model{}

User.init({
    first_name : DataTypes.STRING(255),
    last_name : DataTypes.STRING(255),
    birthday : DataTypes.DATE,
    password : DataTypes.STRING(255),
    email : DataTypes.STRING(255),
    gender : DataTypes.ENUM('male','female'),
},{ sequelize, modelName: 'user', tableName : 'users', timestamps : false });

module.exports = User;

