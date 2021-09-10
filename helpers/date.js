module.exports = function format(date){
    return new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '');
}