require('./database');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//Settings
app.set('port', 3000)
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./server/routes/poliza.routes'));

module.exports = app;