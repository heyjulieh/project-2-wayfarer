var db = require('../models');

// Shows all posts in /api/posts
function index(req, res) {
	db.Posts.find({})
    .exec(function(error, posts) {
      if (error) { res.send(error) };
      res.json(posts);
    });
};

// Shows all posts in /api/cities/:cityId/posts route
function show(req, res) {
	var cityName = req.params.cityId;
  db.Posts.find({cityName: cityName})
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
	var newPost = new db.Posts({
		userIMG: req.body.userIMG,
		user: req.body.user,
		title: req.body.title,
		text: req.body.text,
		date: req.body.date,
		cityName: req.body.cityName
	});

  db.City.findOne({cityName: req.body.cityName}, function(err, cityName){
		console.log('cityName in findOne is: ', req.body.cityName);
  if (err) {
    return console.log(err);
  }
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
   db.Posts.remove({_id: req.params.postId}, function(error, post) {
     if (error) { res.send(error) };
     res.json({ message: 'post has been deleted' })
   });
 }


// Updates a specific post in a specific cityName
function update(req, res) {
	db.Posts.findById(req.params.postId, function (err, updatePost) {
 		if (err) {
			res.send(err)
		};
		console.log('updatePost is: ', updatePost)
		// updatePost = req.body;

		updatePost.title = req.body.title;
		updatePost.text = req.body.text;

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
