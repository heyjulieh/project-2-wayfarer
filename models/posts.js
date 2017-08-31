'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var City = require('./city');

var PostsSchema = new Schema({
	userIMG: String,
	user: String,
	cityName: {
		type: Schema.Types.ObjectId,
		ref: 'City'
	},
	title: String,
	text: String,
	date: Date,
});

module.exports = mongoose.model('Posts', PostsSchema);
