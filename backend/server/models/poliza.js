//Add poliza
const mongoose = require('mongoose');
const { Schema } = mongoose;
//Define Collection and schema for Adpolizas
const PolizaSchema = new Schema({
    nombrePropuesta: { type: String, uppercase: true },
    numeroEndoso: {type: Number },
    fcPropuesta :{ type: String, required: true, uppercase: true  },
    nroPropuesta:{ type: Number, required: true, unique : true, dropDups: true },
    nroPoliza: { type: String },
    nombreAseguradora:{ type: String, required: true,uppercase: true },
    montoAsegurado: {type: Number, required: true,},
    ramo:{ type: String, required: true, uppercase: true },
    alias:{ type: String, uppercase: true},
    rutCliente:{ type: String, required: true, uppercase: true },
    nombreCliente:{ type: String, required: true, uppercase: true },
    rutAcreedor:{ type: String, uppercase: true },
    nombreAcreedor:{ type: String, uppercase: true },
    direccion:{ type: String, required: true, uppercase: true },
    region:{ type: String, required: true, uppercase: true },
    comuna:{ type: String, required: true, uppercase: true },
    formaPago:{ type: String, required: true, uppercase: true },
    nroCuotas:{ type: Number, required: true, },
    fcPrimeraCuota: { type: String, uppercase: true },
    inicioVigencia:{ type: String, required: true, uppercase: true },
    finVigencia:{ type: String, required: true, uppercase: true },
    primaAfecta:{ type: Number, required: true, },
    primaExenta:{ type: Number, required: true, },
    primaNeta:{ type: Number, required: true, },
    iva:{ type: Number, required: true, },
    primaBruta:{ type: Number, required: true, },
    tipoMoneda:{ type: String, required: true, uppercase: true },
    comisionExenta:{ type: Number, required: true, },
    comisionAfecta:{ type: Number, required: true, },
    montoTotal:{ type: Number, required: true, },
    cobertura:{ type: String, uppercase: true },
    limites:{ type: String, uppercase: true },
    items:{ type: String },
    estado:{ type: String, required: true, uppercase: true},
    estadoPago: {type: String, required: true, uppercase: true},
    nombreReferido: {type: String, uppercase: true},
    comisionReferido: {type: Number },
    valorReferido: {type: Number },
    telefonoContacto:{ type: Number },
    nombreContacto: { type: String, uppercase: true }
})

PolizaSchema.methods.itemsUrl = function setItemsUrl(filename, full) {
    // this.items = `${full}:3000/private/${filename}`;
    this.items = `http://localhost:3000/private/${filename}`;
}

module.exports = mongoose.model('Poliza', PolizaSchema);