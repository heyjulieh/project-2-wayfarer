var db = require('../models');

var cities_list = [
	{
		cityName: 'San Francisco',
		cityIMG: './public/images/cities/sanfrancisco.jpg',
		type: 'Featured',
		posts: 'A wonderful city by the water'
	},
	{
		cityName: 'Dubai',
		cityIMG: './public/images/cities/dubai.jpg',
		type: 'Featured',
		posts: 'A wonderful city in the desert'
	},
	{
		cityName: 'Reykjavik',
		cityIMG: './public/images/cities/reykjavik.jpg',
		type: 'Featured',
		posts: 'A wonderful city in the tundra'
	},
	{
		cityName: 'Tokyo',
		cityIMG: './public/images/cities/tokyo.jpg',
		type: 'Featured',
		posts: 'A wonderful city in the Southeast'
	},
	{
		cityName: 'Amsterdam',
		cityIMG: './public/images/cities/amsterdam.jpg',
		type: 'Featured',
		posts: 'A wonderful city by the canals'
	}

]}


db.City.remove({}, function(err,cities) {
	console.log('removed all cities')
	db.City.create(cities_list, function(err, cities) {
		if (err){
			return consle.log('ERROR', err);
		}
		console.log('all cities:', cities);
		console.log('created',cities.length, 'cities');
		process.exit();
	});
});




		