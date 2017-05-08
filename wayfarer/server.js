//importing dependencies
var express = require('express'),
	mongoose = require('mongoose'),
	var db = require('./models');
var controllers = require('./controllers');

	bodyParser = require('body-parser'),
	Posts = require ('.models/posts'),//for the post schema when we build one
	City = require('.models/city');//for the city schema whn we build one

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

app.get(`/api`, controllers.api.index);
app.get(`/api/city`, controllers.city.index);
app.get(`/api/city/${city_id}`, controllers.city.show);
app.get(`/api/posts`, controllers.posts.index);
app.get(`/api/${posts._id}`, controllers.posts.show);
app.get(`/api/city/${city._id}/${posts._id}`, controllers.city.posts.showOne);

app.post(`/api/city/${city._id}/${posts._id}`, controllers.city.posts.create);

app.delete(`/api/city/${city._id}/${posts._id}`, controllers.city.posts.destroy);

app.put(`/api/city/${city._id}/${posts._id}`, controllers.posts.update);


//use router config when we call /API
//start server
app.listen(port, function() {
	console.log(`api running on ${port}`);
});
