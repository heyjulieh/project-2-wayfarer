'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitiesSchema = new Schema({
	cityName: String,
	cityIMG: String,
	type: String,
	post: String
})

var Cities = mongoose.model('Cities', CitiesSchema);

module.exports = Restroom;