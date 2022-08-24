const { response } = require('express');

// Get users
const usersGet = ((req, res = response) => {

    const { query, name, apikey } = req.query;

    res.json({
        message: 'get API - [controller]',
        params: {
            query,
            name,
            apikey
        }
    });

});

// Create a new user
const usersPost = (req, res = response) => {
    const body = req.body;
    console.log(req.body)
    res.json({
        ok: true,
        body,
        msg: 'post API - users created successfully! [controller]',
    });
}

// Update a user
const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - [controller]',
        id
    });
}

// Delte a user
const usersDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - users deleted [controller]'
    });
}

module.exports = {  
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}