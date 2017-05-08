'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema({
	date: String,
	user: String,
	text: String,
	author: String
})

var Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;