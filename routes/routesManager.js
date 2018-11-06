const home = require('./home');
const about = require('./about');
const contact = require('./contact');
const message = require('./message');
const users = require('./users');
const createUser = require('./createUser');
const addUser = require('./addUser');

function routesManager(server) {
    server.use('/addUser', (req, res) => {
        addUser(res);
    });
    server.use('/about', (req, res) => {
        about(res);
    });
    server.use('/contact', (req, res) => {
        contact(res);
    });
    server.use('/message', (req, res) => {
        message(req, res);
    });
    server.use('/users', (req, res) => {
        users(res);
    });
    server.use('/createUser', (req, res) => {
        createUser(req, res);
    });
    server.use('/', (req, res) => {
        home(res);
    });
}

module.exports = routesManager;
