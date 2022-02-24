const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is we don't do this we will have to refer it always as mongoose.Schema

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
})

module.exports = mongoose.model('Campground', CampgroundSchema)