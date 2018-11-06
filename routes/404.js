const path = require('path');

function notFound(res) {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
}

module.exports = notFound;
