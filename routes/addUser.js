const path = require('path');

const rootDir = require('../utils/path');

function addUser(res) {
    res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
}

module.exports = addUser;
