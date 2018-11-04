const http = require('http');
const routesManager = require('./routes');

http.createServer((req, res) => {
    routesManager(req, res);
}).listen(5000);
