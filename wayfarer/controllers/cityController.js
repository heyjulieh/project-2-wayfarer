var db = require('../models');

// GET 
function index(req, res) {
	db.City.find({}, function(err, allCities){
		res.json(allCities)
	});
};

// GET

function show(req, res) {
	db.City.findbyId(req.params.cityId, function(err, foundCity))
}

