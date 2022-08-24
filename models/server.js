const cors = require('cors');
const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();

        // Application routes
        this.routes();
    }

    // Middlewares
    middlewares() {
        this.app.use(cors()); // CORS
        this.app.use( express.json() ); // Parse and read of the body
        this.app.use(express.static('public'));
    }

    // Routes
    routes() { this.app.use(this.usersPath, require('../routes/users.routes')); }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}`);
        });
    }

}

module.exports = Server;