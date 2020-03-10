let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({
    name: String,
    location: String,
    total_average: Number,
    average: [{
        bathroom_quality: Number,
        staff_kindness: Number,
        cleanliness: Number,
        drive_thru: Number,
        delivery_speed: Number,
        food_quality: Number}],
    reviews: [{
        username: String,
        bathroom_quality: Number,
        staff_kindness: Number,
        cleanliness: Number,
        drive_thru: Number,
        delivery_speed: Number,
        food_quality: Number
    }]
});

module.exports = mongoose.model('restaurants', appSchema);
