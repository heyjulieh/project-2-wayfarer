//routes setup to GET /api

function index(req,res) {
	res.json({
		message: 'wassup Julie and Mahmoud',
		collaborators: 'Julie, Mahmoud, Will and Addy',
		documentation_url:'https://github.com/heyjulieh/project-2-wayfarer.git',
		base_url: 'localhost:3000',
		endpoint: [
			{
			method: 'GET',
			path: `/api`,
			description: 'shows this!',

			},
	        {
	        method: 'GET',
	        path: `/api/city`,
	        description: 'shows all city as JSON',
	        },
	        {
	        method: 'GET',
	        path: `/api/city/${city_id}`,
	        description: 'shows req.param.id specific city as JSON',
	        },
	        {
	        method: 'GET',
	        path: `/api/posts`,
	        description: 'shows all posts as JSON',
	        },
	        {
	        method: 'GET',
	        path: `/api/${posts._id}`,
	        description: 'shows req.param.id specific lyric as JSON',
	        },
	        {
	        method: 'GET',
	        path: `/api/city/${city._id}/${posts._id}`
	        description: 'shows req.param.city and posts as JSON',
	        },
	       
	        {
	        method: 'POST',
	        path: `/api/city/${city._id}/${posts._id}`,
	        description: 'creates posts',
	        },
	        {
	        method: 'PUT',
	        path: `/api/city/${city._id}/${posts._id}`,
	        description: 'updates posts',
	        },
	        {
	        method: 'DELETE',
	        path: `/api/city/${city._id}/${posts._id}`,
	        description: 'deletes posts'
	        }
	      ]
	    });
	  }

	module.exports = {
	  index: index
	}


		