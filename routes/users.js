const fs = require('fs');

function users(res) {
    fs.readFile('users.json', {encoding: 'utf-8'}, (error, data) => {
        if(!error) {
            const users = [...JSON.parse(data)];
            const userList = users.map(user => `<li>Name: ${user.name}</li><li>Age: ${user.age}</li><li>Country: ${user.country}</li>`).join('');
            const tmpl = `<html>
                    <head></head>
                    <style>
                        nav ul li {
                            display: block;
                            width: 100px;
                            height: 50px;
                            justify-content: center;
                            align-items: center;
                            list-style: none;
                        }
                        
                        nav ul li a {
                            font-family: Ubuntu, sans-serif;
                            font-size: 20px;
                            font-weight: bold;
                        }
                    </style>
                    <body>
                        <nav style="display: flex; justify-content: center; width: 100%;">
                            <ul style="width: 100%; display: flex; justify-content: center">
                                <li><a href="/">Home</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/users">Users</a></li>
                            </ul>
                        </nav>
                        <hr>
                        <ul>${userList}</ul>
                        <form action="/addUser" method="POST">
                            <button type="submit">Add user</button>
                        </form>
                    </body>
                  </html>`;

            res.setHeader('Content-Type', 'text/html');
            res.write(tmpl);
            res.end();
        } else {
            console.log(error);
        }
    });
}

module.exports = users;
