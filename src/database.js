const Mongoose  = require("mongoose");
const mongoose = require('mongoose');
var ip = prompt("insert the ip: ")
// const URI = 'mongodb://192.168.0.11:27017';
const URI = 'mongodb://admin:ebelmar%402020@'+ip+':27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(URI, { useNewUrlParser: true })
    .then(DB => console.log('DB is connected to: '+ URI))
    .catch(err => console.error(err));

// const Mongoose  = require("mongoose");

// const mongoose = require('mongoose');
// const URI = 'mongodb+srv://Alyosha:6XUb9oE3OKDXHgp1@cluster0.kc8vb.mongodb.net/Konex?retryWrites=true&w=majority';

// mongoose.connect(URI)
//     .then(DB => console.log('DB is connected'))
//     .catch(err => console.error(err));
