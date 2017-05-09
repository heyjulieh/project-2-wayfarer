var db = require('../models');

function index(req, res) {
	db.Posts.find({}, function(err, allPosts) {
		res.json(allPosts);
	});
};

// finds a post by matching ID and returns it
function show(req, res) {
	console.log('req.params for unique post is: ', req.params)
	// var foundCityId = req.params.cityId;
	// var foundPostId = req.params.postId;

	// console.log(foundPostId);
	// console.log(foundCityId);

	// db.City.findById(foundCityId, function(err, foundCity) {
		
	// 	var allPosts = foundCity.posts;

	// 	allPosts.findById(foundPostId, function(err, foundPost) {

	// 		res.json(foundPost);

	// 	});
	// });
};

// finds matching post content in db.Posts and returns it
function showOne(req, res) {
	db.Posts.findOne({post:req.params.post})
		.exec(function(err, foundPost) {
			res.json(foundPost);
		});
};

function create(req, res) {
	console.log('body', req.body);
	db.Posts.create(req.body, function(err, newPost) {
		res.json(newPost);
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


