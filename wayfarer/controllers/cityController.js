var db = require('../models');

// GET 
function index(req, res) {
	db.City.find({}, function(err, allCity){
		res.json(allCity)
	});
};

function show(req, res) {
	var cityId = req.params.cityId;
	db.City.findById(cityId, function(err, foundCity) {
		res.json(foundCity);
	});
};

module.exports = {
	index: index,
	show: show
};



