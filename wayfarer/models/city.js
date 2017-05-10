var Posts = require('./posts');
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
	cityName: String,
	imgURL: String,
	type: String,
	posts: [{type:Schema.Type.ObjectId},
			{
			ref:Posts
			}]
});

var City = mongoose.model('City', CitySchema);

module.exports = City;
