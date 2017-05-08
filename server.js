//importing dependencies
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	Post = require ('.model/posts'),//for the post schema when we build one
	City = require('.model/cities');//for the city schema whn we build one

//to create instances
var app = express(),
	router = express.Router();

//to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded ({extended:true}));
app.use(bodyParser.json());

//set route path and initiate API
router.get ('/', function (req,res){
	res.json({message: 'Initilaize API'});
});

//adding /posts route to our/api router here
router.route('posts')
get (function (req,res) {

//ADD MORE CODE HERE


});

.post(function (req,res) {
 
 // ADD MORE CODE FOR CREATE "POST" HERE

});

//deleteing all posts
router.route ('/nuke')
.get (function (req,res) {

//ADD MORE DELETE CODE HERE

});

// adding route for posts
router.route(and '/cities/:cityid/post/:id')// for updating posts 
.put ( function (req,res) {

//ADD MORE CODE HERE

})
)

//deleting method for removing a post from teh database

.delete(function(req, res) {
   Post.remove({ _id: req.params.post_id }, function(err, post) {
     if (err)
       res.send(err);
     res.json({ message: 'Your post has been deleted' })
   })
 });

//adding route for cities
router.route('/cities/:cityid')
.put (function (req,res) {

//ADD MORE CODE HERE PLUS DELETEING METHOD AS WELL

})

//use router config when we call /API
//start server
app.listen(port, function() {
	console.log(`api running on ${port}`);
});
