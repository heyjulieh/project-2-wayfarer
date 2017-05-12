var db = require('../models');

// Shows all posts in /api/posts route
function index(req, res) {
	db.Post.find({}, function(err, allPosts){
		res.json(allPosts)
	});
};

// Shows all posts under a specific city
function showPosts(req, res) {
	var city = req.params.cityId
	db.Post.find({city}, function(err, showAllPosts) {
		res.json(showAllPosts);
	});
};

// Shows a specific post for a specific city
function showOne(req, res) {
    var postId = req.params.postId;
    db.Post.findById(postId, function(err, foundPost) {
        res.json(foundPost);
    });
};

// Creates a specific post in a specific city
function create(req, res) {

	console.log('req.body: ', req.body)
	console.log('req.body.city is: ', req.body.city)

		var newPost = new db.Post({
			userIMG: req.body.userIMG,
			user: req.body.user,
			city: req.body.city,
			title: req.body.title,
			text: req.body.text,
			date: req.body.date,
			userID: req.body.userID
		});

		db.City.findOne({city: req.body.city}, function(err, city) {

			// city returns null. Why? Shouldn't this be a matching db.City object, or at least an ID

			if (err) {

				console.log(err.message);

			} else if (req.body.city === null) {

					console.log('post create error: ${req.body.city} not found');

			} else {

				db.Post.create(newPost, function(err, newCreatedPost) {

					if (err) {
						console.log('post save error: ', err);
					} else {
						console.log('new created post: ', newCreatedPost);
						res.json(newCreatedPost);
					}

				});

		}
	});
}

function destroy(req, res) {

	console.log('made it to empty destroy function')
	// db.City.findOneById(req.params.cityId, function (err, foundCity) {

	// 	foundCity.posts.findOneById(req.params.postId, (err, foundPost) {

	// 		foundPost.delete()
	// 		foundCity.posts.save()

	// 	});

	// });

};

// Updates a specific post in a specific city
function update(req, res) {

	db.Post.findOne({city: req.params.cityId, _id: req.params.postId}, function (err, updatePost) {

		console.log('updatePost is: ', updatePost)
		// updatePost = req.body;

		updatePost.user = req.body.user;
		updatePost.userIMG = req.body.userIMG;
		updatePost.title = req.body.title;
		updatePost.text = req.body.text;
		updatePost.city = req.params.cityId;

		updatePost.save(function(err, updatedPost) {
			if (err) {
				console.log('post save error: ', err);
			} else {
				console.log('saved post: ', updatedPost);
				res.json(updatedPost);
			}
		});
	});
}

module.exports = {
	index: index,
	showPosts: showPosts,
	create: create,
	showOne: showOne,
	destroy: destroy,
	update: update
}
