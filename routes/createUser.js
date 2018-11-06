const fs = require('fs');

function createUser(req, res) {
    const user = req.body;

    storeNewUser(user, res);
}

function storeNewUser(user, res) {
    fs.readFile('users.json', {encoding: 'utf-8'}, (error, data) => {
        if(!error) {
            const users = [...JSON.parse(data)];
            const newUsers = JSON.stringify([...users, user]);

            fs.writeFile('users.json', newUsers, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    res.redirect('/users');
                }
            });
        } else {
            console.log(error);
        }
    });
}

module.exports = createUser;
