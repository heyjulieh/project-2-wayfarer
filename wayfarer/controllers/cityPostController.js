var db = require('../models');

// Finding all posts going to api/posts route
function index(req, res) {
	db.Post.find({}, function(err, allPosts){
		res.json(allPosts)
	});
};

// Show all posts under 1 city ID
function showPosts(req, res) {
	var city = req.params.cityId
	db.Post.find({city}, function(err, showAllPosts) {
		res.json(showAllPosts);
		console.log('showAllPosts', showAllPosts)
		console.log('req.params', req.params)
	});
};

// Show 1 post for 1 city ID
function showOne(req, res) {
    var postId = req.params.postId;
    db.Post.findById(postId, function(err, foundPost) {
        res.json(foundPost);
    });
};

function create(req, res) {

	var newPost = new db.Post({
		userIMG: req.body.userIMG,
		user: req.body.user,
		city: req.params.cityId,
		title: req.body.title,
		text: req.body.text
	
	});

	db.City.findOne({city: req.body.cityId}, function(err, city) {
		if (err) {
			console.log(err.message);
		} else {
			console.log('city is: ', city);
			if (city === null) {
				console.log('post create error: ${req.body.cityId} not found');
			} else {
				newPost.city = city;
				newPost.save(function(err, post) {
					if (err) {
						console.log('post save error: ', err);
					} else {
						conosle.log('saved post: ', post);
						res.json(post);
					}
				})
			}
		}
	});
}

function destroy(req, res) {

	console.log('made it to empty destroy function')
	db.City.findOneById(req.params.cityId, function (err, foundCity) {

		foundCity.post.findOneById(req.params.postId, (err, foundPost) {

	 		foundPost.delete()
			foundCity.post.save()

 	});

});

};

function update(req, res) {

	db.Post.findOne({city:req.params.city, post:req.params.post}, function (err, updatePost) {
		updatePost.date = req.body.date;
		updatePost.user = req.body.user;
		updatePost.text = req.body.text;
		updatePost.save(function (err, savedPost) {
			res.json(savedPost);
		});
	});
};

module.exports = {
	index: index,
	showPosts: showPosts,
	create: create,
	showOne: showOne,
	destroy: destroy,
	update: update
}
