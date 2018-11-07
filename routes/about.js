const path = require('path');

const rootDir = require('../utils/path');

function about(res) {
    res.sendFile(path.join(rootDir, 'views', 'about.html'));
}

module.exports = about;
