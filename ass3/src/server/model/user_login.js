let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user_loginSchema = new Schema({
    username: String,
    password: String,
    logged_in: Boolean
});

module.exports = mongoose.model('user_login', user_loginSchema);
