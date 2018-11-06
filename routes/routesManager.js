const express = require('express');

const home = require('./home');
const about = require('./about');
const contact = require('./contact');
const message = require('./message');
const users = require('./users');
const createUser = require('./createUser');
const addUser = require('./addUser');
const notFound = require('./404');

const router = express.Router();

router.post('/message', (req, res) => {
    message(req, res);
});
router.post('/createUser', (req, res) => {
    createUser(req, res);
});
router.get('/addUser', (req, res) => {
    addUser(res);
});
router.get('/about', (req, res) => {
    about(res);
});
router.get('/contact', (req, res) => {
    contact(res);
});
router.get('/users', (req, res) => {
    users(res);
});
router.get('/', (req, res) => {
    home(res);
});
router.use((req, res) => {
    notFound(res);
});

module.exports = router;
