const mongoose = require('mongoose');

const URI = 'mongodb://admin:ebelmar2020@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false';
// const URI = 'mongodb://admin:ebelmar2020@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(URI, { useUnifiedTopolgy: true,
    useNewUrlParser: true 
})
    .catch(err => console.error(err));
