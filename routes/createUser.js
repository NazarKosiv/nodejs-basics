const fs = require('fs');

function createUser(req, res) {
    const initialData = [];

    req.on('data', data => {
        initialData.push(data);
    });

    req.on('end', () => {
        const parsedData = Buffer.concat(initialData).toString();
        const user = pullOutUserData(parsedData);

        storeNewUser(user, res);
    });
}

function pullOutUserData(data) {
    const userData = data.split('&');
    const name = userData.filter(val => val.includes('name') === true)[0].split('=')[1].split('+').join(' ');
    const age = userData.filter(val => val.includes('age') === true)[0].split('=')[1];
    const country = userData.filter(val => val.includes('country') === true)[0].split('=')[1].split('+').join(' ');

    return { name, age, country };
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
                    res.statusCode = 302;
                    res.setHeader('Location', '/users');
                    res.end();
                }
            });
        } else {
            console.log(error);
        }
    });
}

module.exports = createUser;
