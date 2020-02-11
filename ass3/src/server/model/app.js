let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
    name: String,
    rating: Number,
    latitude: Number,
    longtitude: Number
});

module.exports = mongoose.model('restaurants', appSchema);
