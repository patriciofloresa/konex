require('./database');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');

//Settings
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./server/routes/poliza.routes'));

app.use('/storage', express.static(`${__dirname}/itemsImg`))

module.exports = app;