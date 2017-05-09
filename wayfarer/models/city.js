'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
	cityName: String,
	imgURL: String,
	type: String,
	posts: String
})

var City = mongoose.model('City', CitySchema);

module.exports = City;