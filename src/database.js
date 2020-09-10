const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
const URI = 'mongodb://localhost/Konex';

mongoose.connect(URI)
    .then(DB => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
    
