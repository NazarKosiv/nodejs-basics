const path = require('path');

function contact(res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
}

module.exports = contact;
