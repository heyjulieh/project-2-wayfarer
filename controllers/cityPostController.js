var db = require('../models');

// Shows all posts in /api/posts
function index(req, res) {
	db.Posts.find({})
    .populate('cityName')
    .exec(function(error, posts) {
      if (error) { res.send(error) };
      res.json(posts);
    });
};

// Shows all posts in /api/cities/:cityName/posts route (cityName = cityId)
function show(req, res) {
	var cityName = req.params.cityName;
  db.Posts.find({cityName: cityName})
	.populate('cityName')
	.exec(function(error, posts) {
		if (error) { res.send(error) };
		res.json(posts);
  });
}

// Shows a specific post in /api/cities/:cityName/posts/:postId
function showOne(req, res) {
	var postId = req.params.postId;
	 db.Posts.findById(postId, function(err, foundPost) {
			 res.json(foundPost);
	 });
}

// Create a new post at /api/posts
function create(req, res) {
  db.Posts.findOne({cityName: req.body.cityName}, function(err, cityName){
		var newPost = new db.Posts({
			userIMG: req.body.userIMG,
			user: req.body.user,
			title: req.body.title,
	    text: req.body.text,
	    date: req.body.date,
		});
  if (err) {
    return console.log(err);
  }
		newPost.cityName = cityName;
     // save newBook to database
     newPost.save(function(err, post){
       if (err) {
         return console.log("save error: " + err);
       }
       console.log("saved ", post.title);
       res.json(post);
     });
   });
 };

function destroy(req, res) {

	console.log('made it to empty destroy function')

	db.Post.remove({_id: req.params.postId}, function (err, foundPost) {
			if (err)
				res.send(err);
		});
};


// Updates a specific post in a specific cityName
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
};

module.exports = {
	index: index,
	show: show,
	showOne: showOne,
	create: create,
	destroy: destroy,
	update: update
}