var Posts = require('./posts');
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
	name: String,
	imgURL: String,
	type: String
});

var City = mongoose.model('City', CitySchema);

module.exports = City;
