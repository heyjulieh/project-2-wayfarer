var db = require('./models');

var cities_list = [
	{
		cityName: 'San Francisco',
		imgURL: '/images/cities/sanfrancisco.jpg',
		type: 'largeCard',
		posts: 
			[{
			userImg: '',
			user: 'Will Fong',
			cityName: 'San Francisco',
			title: 'While My Guitar Gently Weeps',
			text: 'The shrooms were magnificient. This city sure knows how to fly!',
			date: '3/25/2017'
			}]
	},
	{
		cityName: 'Dubai',
		imgURL: '/images/cities/dubai.jpg',
		type: 'mediumCard',
		posts: 
			[{
			userImg: '',
			user: 'Addy Kumar',
			cityName: 'Dubai',
			title: 'Yesterday',
			text: 'Its too damn hot here.',
			date: '1/2/2017'
			}]
	},
	{
		cityName: 'Reykjavik',
		imgURL: '/images/cities/reykjavik.jpg',
		type: 'smallCard',
		posts: 
			[{
			userImg: '',
			user: 'Julie Huang',
			cityName: 'Reykjavik',
			title: 'Hold My Hand',
			text: 'COLD COLD COLD, but the hot springs are a must see.',
			date: '4/10/2016'
			}]
	},
	{
		cityName: 'Tokyo',
		imgURL: '/images/cities/tokyo.jpg',
		type: 'smallCard',
		posts: 
			[{
			userImg: '',
			user: 'Julie Huang',
			cityName: 'Tokyo',
			title: 'I Want To Hold My Hand',
			text: 'COLD COLD COLD, but the hot springs are a must see.',
			date: '4/10/2016'
			}]
	},
	{
		cityName: 'Amsterdam',
		imgURL: '/images/cities/amsterdam.jpg',
		type: 'largeCard',
		posts: 
			[{
			userImg: '',
			user: 'Mahmoud Bachir',
			cityName: 'Amsterdam',
			title: 'Lucy In The Sky With Diamonds',
			text: 'Ramen was so bomb!',
			date: '3/25/2017'
			}]
	}
]

db.City.remove({}, function(err, cities) {
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


		