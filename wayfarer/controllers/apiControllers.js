function index(req,res) {
    res.json({
        message: 'wassup Julie and Mahmoud',
        collaborators: 'Julie, Mahmoud, Will and Addy',
        documentation_url:'https://github.com/heyjulieh/project-2-wayfarer.git',
        base_url: 'localhost:3000',
        endpoint: [
            {
            method: 'GET',
            path: '/api',
            description: 'shows everything!'
            },
            {
            method: 'GET',
            path: '/api/cities',
            description: 'shows all city as JSON'
            },
            {
            method: 'GET',
            path: '/api/posts',
            description: 'shows all posts as JSON'
            },
            {
            method: 'GET',
            path: '/api/cities/:cityId',
            description: 'shows specific id as JSON'
            },
            {
            method: 'GET',
            path: '/api/cities/:cityId/posts/',
            description: 'shows all posts within a city id as JSON'
            },
            {
            method: 'GET',
            path: '/api/cities/:cityId/posts/:postId',
            description: 'shows a specific post id within a city id as JSON'
            },
            {
            method: 'POST',
            path: '/api/cities/:cityId/posts/:postId',
            description: 'creates posts'
            },
            {
            method: 'PUT',
            path: '/api/cities/:cityId/posts/:postId',
            description: 'updates posts'
            },
            {
            method: 'DELETE',
            path: '/api/cities/:cityId/posts/:postId',
            description: 'deletes posts'
            }
        ]
    });
}

    module.exports = {
      index: index
    }
