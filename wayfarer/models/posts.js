'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	userImg: String,
	user: String,
	cityName: String,
	title: String,
	text: String,
	date: Date
})

var Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;