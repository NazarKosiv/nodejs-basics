function addUser(res) {
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
                        <form action="/createUser" method="POST">
                            <h1>User info:</h1>
                            <div>
                                <label for="name">Name:</label>
                                <input id="name" type="text" name="name">
                            </div>
                            <div>
                                <label for="age">Age:</label>
                                <input id="age" type="text" name="age">
                            </div>
                            <div>
                                <label for="country">Country:</label>
                                <input id="country" type="text" name="country">
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </body>
                  </html>`;

    res.setHeader('Content-Type', 'text/html');
    res.write(tmpl);
    res.end();
}

module.exports = addUser;
