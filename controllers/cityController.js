var db = require('../models');

// Shows all cities in /api/cities route
function index(req, res) {
	db.City.find({}, function(err, allCity){
		res.json(allCity)
	});
};

// Shows all cities
function showCities(req, res) {
	var cityId = req.params.cityId;
	db.City.findById(cityId, function(err, foundCity) {
		res.json(foundCity);
	});
};

module.exports = {
	index: index,
	showCities: showCities
};
