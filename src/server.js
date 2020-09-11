const express = require('express');
const app = express();
const cors = require('cors')

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200/'}))
//Routes
app.use(require('./server/routes/poliza.routes'))

//Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})