'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema({
	date: String,
	user: String,
	text: String
})

var Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;