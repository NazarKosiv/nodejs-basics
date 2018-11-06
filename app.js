const express = require('express');
const bodyParser = require('body-parser');

const routesManager = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(routesManager);

app.listen(5000);
