//Add poliza
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Collection and schema for Adpolizas

let AdPoliza = new Schema({

    fc_propuesta :{
        type = Date
    },
    nro_propuesta :{
        type: Number
    },
    nm_coaseguradora:{
        type: String
    },
    ramo:{
        type = String
    }

})