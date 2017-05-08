var db = require('../models');

// GET 
function index(req, res) {
	db.City.find({}, function(err, allCities){
		res.json(allCities)
	});
};

// POST

function create(req, res) {
	console.log('body', req.body);
	var cityName = req.body.cityName;
	var cityIMG = req.body.img;
	var type = req.body.type;
	var post = req.body.post;

	db.Ciy.create(req.body, function(err, city) {
		if(err) {
			throw err;
		}
		res.json(city);
	});
};

// GET

function show(req, res) {
	db.City.findbyId(req.params.cityId, function(err, foundCity))
}

