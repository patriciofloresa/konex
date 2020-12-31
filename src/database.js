const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:ebelmar2020@25.1.200.237:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log('Database is connected'))
    .catch((err) => console.log(err));
