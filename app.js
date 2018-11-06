const express = require('express');

const routesManager = require('./routes');

const app = express();

routesManager(app);

app.listen(5000);
