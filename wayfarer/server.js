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

app.get('/api', controllers.api.index); // works
app.get('/api/cities', controllers.city.index); // works
app.get('/api/cities/:cityId', controllers.city.show); // works
app.get('/api/cities/:cityId/posts', controllers.posts.index); 
app.get('/api/cities/:cityId/posts/:postId', controllers.posts.show);
app.get('/api/cities/:cityId/posts/:postId', controllers.posts.showOne);
app.post('/api/cities/:cityId/posts', controllers.posts.create);
app.delete('/api/cities/:cityId/posts/:postId', controllers.posts.destroy);
app.put('/api/cities/:cityId/posts/:postId', controllers.posts.update);


//use router config when we call /API
//start server
var port = 3000;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});