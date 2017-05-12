'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema({
	userIMG: String,
	user: String,
	title: String,
	text: String,
	date: Date,
	userID: String,
	city: 
	{
		type: Schema.Types.ObjectId,
		ref: 'City'
	}
});

var Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;
