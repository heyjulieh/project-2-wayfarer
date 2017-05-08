//importing dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    db = require('./models');
    controllers = require('./controllers');

    bodyParser = require('body-parser'),
    Posts = require('./models/posts'),//for the post schema when we build one
    City = require('./models/city');//for the city schema whn we build one

//to create instances
var app = express()
	// route = express.Router();

//to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
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