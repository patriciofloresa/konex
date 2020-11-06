const Mongoose  = require("mongoose");
const mongoose = require('mongoose');
// const URI = 'mongodb://192.168.0.11:27017';
const URI = 'mongodb://admin:ebelmar%402020@192.168.0.11:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(URI, { useNewUrlParser: true })
    .then(DB => console.log('DB is connected to: '+ URI))
    .catch(err => console.error(err));

    