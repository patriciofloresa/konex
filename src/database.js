const Mongoose  = require("mongoose");

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/Konex';

mongoose.connect(URI)
    .then(DB => console.log('DB is connected'))
    .catch(err => console.error(err));

// const Mongoose  = require("mongoose");

// const mongoose = require('mongoose');
// const URI = 'mongodb+srv://Alyosha:6XUb9oE3OKDXHgp1@cluster0.kc8vb.mongodb.net/Konex?retryWrites=true&w=majority';

// mongoose.connect(URI)
//     .then(DB => console.log('DB is connected'))
//     .catch(err => console.error(err));
