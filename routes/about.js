const path = require('path');

function about(res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'about.html'));
}

module.exports = about;
