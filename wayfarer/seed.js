var db = require('./models');

var cities_list = [
	{
		cityName: 'San Francisco',
		imgURL: '/images/cities/sanfrancisco.jpg',
		type: 'largeCard',
		posts: 'A wonderful city by the water'
	},
	{
		cityName: 'Dubai',
		imgURL: '/images/cities/dubai.jpg',
		type: 'mediumCard',
		posts: 'A wonderful city in the desert'
	},
	{
		cityName: 'Reykjavik',
		imgURL: '/images/cities/reykjavik.jpg',
		type: 'smallCard',
		posts: 'A wonderful city in the tundra'
	},
	{
		cityName: 'Tokyo',
		imgURL: '/images/cities/tokyo.jpg',
		type: 'smallCard',
		posts: 'A wonderful city in the Southeast'
	},
	{
		cityName: 'Amsterdam',
		imgURL: '/images/cities/amsterdam.jpg',
		type: 'largeCard',
		posts: 'A wonderful city by the canals'
	}
]


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


		