'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema({
	userIMG: String,
	user: String,
	cityName: String,
	title: String,
	text: String,
	date: Date
})

var Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;
