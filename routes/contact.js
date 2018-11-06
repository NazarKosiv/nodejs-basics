const path = require('path');

const rootDir = require('../utils/path');

function contact(res) {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

module.exports = contact;
