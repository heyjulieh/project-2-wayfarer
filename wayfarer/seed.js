var db = require('./models');

var cities_list = [
	{
		cityName: 'San Francisco',
		imgURL: '/images/cities/sanfrancisco.jpg',
		type: 'largeCard',
		posts:
			[{
				userIMG: 'https://images.pexels.com/photos/101584/pexels-photo-101584.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
				user: 'Anthony L.',
				cityName: 'SanFrancisco',
				title: 'Home is Where the Sandwich is',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
				date: '5/10/2017'
			}]
	},
	{
		cityName: 'Dubai',
		imgURL: '/images/cities/dubai.jpg',
		type: 'mediumCard',
		posts:
			[{
				userIMG: 'https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
				user: 'Violet',
				cityName: 'Dubai',
				title: 'Words from a Local',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
				date: '5/10/2017'
			}]
	},
	{
		cityName: 'Reykjavik',
		imgURL: '/images/cities/reykjavik.jpg',
		type: 'smallCard',
		posts:
			[{
			userIMG: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
			user: 'Blair',
			cityName: 'Reykjavik',
			title: 'Really Cool Vibes, Man.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
			date: '5/10/2017'
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
