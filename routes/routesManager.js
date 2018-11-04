const home = require('./home');
const about = require('./about');
const contact = require('./contact');
const message = require('./message');
const users = require('./users');
const createUser = require('./createUser');
const addUser = require('./addUser');
const notFound = require('./404');

function routesManager(req, res) {
    switch (req.url) {
        case '/':
            home(res);
            break;

        case '/about':
            about(res);
            break;

        case '/contact':
            contact(res);
            break;

        case '/message':
            message(req, res);
            break;

        case '/users':
            users(res);
            break;

        case '/createUser':
            createUser(req, res);
            break;

        case '/addUser':
            addUser(res);
            break;

        default:
            notFound(res);
    }
}

module.exports = routesManager;
