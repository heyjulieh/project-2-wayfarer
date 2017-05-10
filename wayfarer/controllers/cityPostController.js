var db = require('../models');

function index(req, res) {
	db.City.findOne({_id: req.params.cityId}, function (err, city) {
		res.json(city.posts);
	});
};

function show(req, res) {
	db.Posts.findById(req.params.postId, function(err, post) {
		res.json(post)
		console.log(err);
	});
};

function create(req, res) {
	console.log('body', req.body);
	db.Posts.create(req.body, function(err, newPost) {
		res.json(newPost);
	});
};

function showOne(req, res) {
	db.Posts.findOne({post:req.params.post})
		.exec(function(err, foundPost) {
			res.json(foundPost);
		});
};

function destroy(req, res) {
	db.Posts.findOneAndRemove({city:req.params.city, post:req.params.post}, function (err, deletedPost) {
		res.json(deletedPost);
	});
};

function update(req, res) {
	db.Posts.findOne({city:req.params.city, post:req.params.post}, function(err, updatePost) {
		updatePost.date = req.body.date;
		updatePost.user = req.body.user;
		updatePost.text = req.body.text;
		updateSong.save(function(err, savedPost) {
			res.json(savedPost);
		});
	});
};

module.exports = {
	index: index,
	show: show,
	create: create,
	showOne: showOne,
	destroy: destroy,
	update: update
}


