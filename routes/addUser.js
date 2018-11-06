const path = require('path');

function addUser(res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
}

module.exports = addUser;
