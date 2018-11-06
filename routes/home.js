const path = require('path');

const rootDir = require('../utils/path');

function home(res) {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
}

module.exports = home;
