const Mongoose  = require("mongoose");
const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
//const URI = 'mongodb://admin:ebelmar2020@25.1.200.237:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(URI, { useNewUrlParser: true })
    .then(DB => console.log('DB is connected to: '+ URI))
    .catch(err => console.error(err));
