function index(req,res) {
    res.json({
        message: 'Awkward High Five!',
        collaborators: 'Julie, Mahmoud, Will, and Addy',
        documentation_url:'https://github.com/heyjulieh/project-2-wayfarer.git',
        base_url: 'localhost:3000',
        endpoint: [
            {
            method: 'GET',
            path: '/api',
            description: 'shows all avaliable routes as JSON'
            },
            {
            method: 'GET',
            path: '/api/cities',
            description: 'shows all city as JSON'
            },
            {
            method: 'GET',
            path: '/api/cities/:name',
            description: 'shows a specific city as JSON'
            },
            {
            method: 'GET',
            path: '/api/cities/:name/posts',
            description: 'shows all posts for a specific city in JSON'
            },

            {
            method: 'GET',
            path: '/api/cities/:name/posts/',
            description: 'shows all posts within a specific city as JSON'
            },
            {
            method: 'GET',
            path: '/api/cities/:name/posts/:postId',
            description: 'shows a specific post within a specific city JSON'
            },
            {
            method: 'POST',
            path: '/api/cities/:name/posts/:postId',
            description: 'creates a specifc post in a specific city'
            },
            {
            method: 'PUT',
            path: '/api/cities/:name/posts/:postId',
            description: 'updates a specific post in a specific city'
            },
            {
            method: 'DELETE',
            path: '/api/cities/:name/posts/:postId',
            description: 'deletes a specific post in a specfic city'
            }
        ]
    });
}

module.exports.index = index;
