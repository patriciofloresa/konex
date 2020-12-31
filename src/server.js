require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
app.use(morgan('dev'))
app.use(express.json());
app.use(cors({}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("Access-Control-Allow-Methods","GET",'POST',"DELETE", "PUT");
  res.header("Access-Control-Allow-Headers","Origin, x-Requested-With, Content-Type, Accept");
  next();
})
app.use(cors({origin: 'http://25.1.200.237:'}));
// app.use(cors({ origin: 'http://localhost:4200'}));
// app.use(cors({origin: '25.95.20.58:80'}));
app.use(function(req, res, next){
  req.setTimeout(0) // no timeout for all requests, your server will be DoS'd
  next()
})
//Routes
app.use('/private', express.static(`${__dirname}/assets/publicStorage`))
app.use(require('./server/routes/poliza.routes'));

//Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})

//Conecttion to database