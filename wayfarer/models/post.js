'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	date: String,
	user: String,
	text: String,
	author: String
})

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;