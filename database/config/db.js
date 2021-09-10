const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('w_express', 'root', 'root', {
    host: 'localhost',
    port : 3306,
    dialect: 'mysql'
});
async function checkConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection().then((r) => 'connected');

module.exports = {
    getConnection(){
        return sequelize;
    }
}