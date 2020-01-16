let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
    name: String,
    rating: Number
});

module.exports = mongoose.model('AppModel', appSchema);
