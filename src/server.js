const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(function(req, res, next){
  req.setTimeout(0) // no timeout for all requests, your server will be DoS'd
  next()
})

//Routes
app.use(require('./server/routes/poliza.routes'));

//Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})