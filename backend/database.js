const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/?readPreference=primary&ssl=false'
// const uri = 'mongodb://admin:ebelmar2020@25.1.200.237:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log('Database is connected'))
    .catch((err) => console.log(err));
