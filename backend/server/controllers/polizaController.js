const Poliza = require("../models/poliza");
const app = require("../../app.js");
const polizaController = {};

polizaController.createPoliza = async (req, res) => {
    try {
        const poliza = new Poliza({     
            nombrePropuesta : req.body.nombrePropuesta,
            nroPoliza: req.body.nroPoliza,
            fcPropuesta: req.body.fcPropuesta,
            nroPropuesta: req.body.nroPropuesta,
            nombreAseguradora: req.body.nombreAseguradora,
            ramo: req.body.ramo,
            montoAsegurado: req.body.montoAsegurado,        
            rutCliente: req.body.rutCliente,
            alias: req.body.alias,
            nombreCliente: req.body.nombreCliente,
            rutAcreedor: req.body.rutAcreedor,
            nombreAcreedor: req.body.nombreAcreedor,
            telefonoContacto: req.body.telefonoContacto,
            nombreContacto: req.body.nombreContacto,
            direccion: req.body.direccion,
            region: req.body.region,
            comuna: req.body.comuna,
            formaPago: req.body.formaPago,
            nroCuotas: req.body.nroCuotas,
            fcPrimeraCuota: req.body.fcPrimeraCuota,
            inicioVigencia: req.body.inicioVigencia,
            finVigencia: req.body.finVigencia,
            primaAfecta: req.body.primaAfecta,
            primaExenta: req.body.primaExenta,
            primaNeta: req.body.primaNeta,
            iva: req.body.iva,
            primaBruta: req.body.primaBruta,
            tipoMoneda: req.body.tipoMoneda,
            comisionExenta: req.body.comisionExenta,
            comisionAfecta: req.body.comisionAfecta,
            montoTotal: req.body.montoTotal,
            cobertura: req.body.cobertura,
            limites: req.body.limites,
            items: req.body.file,
            estado: req.body.estado,
            estadoPago: req.body.estadoPago,
            nombreReferido: req.body.nombreReferido,
            comisionReferido: req.body.comisionReferido,
            valorReferido: req.body.valorReferido,
            numeroEndoso: req.body.numeroEndoso
        });
        if (req.file){
            const {filename} = req.file
            const full = req.hostname
            poliza.itemsUrl(filename, full)
        }else{
        console.log('not req file')
            console.log(poliza)}
        const stored = await poliza.save()
        res.status(201).send({ stored })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Mensaje CULIAO'+error.message })
    }
}

polizaController.getPolizas = async(req, res) => {
    const polizas = await Poliza.find().sort({ nroPropuesta: -1 });
    res.json(polizas);
}

polizaController.getPoliza = async(req, res) => {
    const poliza = await Poliza.findById(req.params.id);
    res.json(poliza);
}

polizaController.getLastNroPropuesta = async(req, res) => {
    const poliza = await Poliza.findOne({}).sort({ nroPropuesta: -1 }).limit(1) 
    if (poliza){
        res.json(poliza.nroPropuesta+1);}
    else{
        const poliza= new Poliza
        poliza.nroPropuesta = 1;
        res.json(poliza.nroPropuesta);    
    }
}

polizaController.editPoliza = async (req, res) => {
    
    const { id } = req.params;
    const poliza =  {     
        nombrePropuesta : req.body.nombrePropuesta,
        nroPoliza: req.body.nroPoliza,
        fcPropuesta: req.body.fcPropuesta,
        nroPropuesta: req.body.nroPropuesta,
        nombreAseguradora: req.body.nombreAseguradora,
        ramo: req.body.ramo,
        montoAsegurado: req.body.montoAsegurado,        
        rutCliente: req.body.rutCliente,
        alias: req.body.alias,
        nombreCliente: req.body.nombreCliente,
        rutAcreedor: req.body.rutAcreedor,
        nombreAcreedor: req.body.nombreAcreedor,
        telefonoContacto: req.body.telefonoContacto,
        nombreContacto: req.body.nombreContacto,
        direccion: req.body.direccion,
        region: req.body.region,
        comuna: req.body.comuna,
        formaPago: req.body.formaPago,
        nroCuotas: req.body.nroCuotas,
        fcPrimeraCuota: req.body.fcPrimeraCuota,
        inicioVigencia: req.body.inicioVigencia,
        finVigencia: req.body.finVigencia,
        primaAfecta: req.body.primaAfecta,
        primaExenta: req.body.primaExenta,
        primaNeta: req.body.primaNeta,
        iva: req.body.iva,
        primaBruta: req.body.primaBruta,
        tipoMoneda: req.body.tipoMoneda,
        comisionExenta: req.body.comisionExenta,
        comisionAfecta: req.body.comisionAfecta,
        montoTotal: req.body.montoTotal,
        cobertura: req.body.cobertura,
        limites: req.body.limites,
        estado: req.body.estado,
        estadoPago: req.body.estadoPago,
        nombreReferido: req.body.nombreReferido,
        comisionReferido: req.body.comisionReferido,
        valorReferido: req.body.valorReferido,
        numeroEndoso: req.body.numeroEndoso,
        items: req.body.items
    };
    if (req.file){
        const {filename} = req.file 
        poliza.items = "http://localhost:3000/private/"+req.file.filename;
        console.log(' if req file')
        console.log(poliza)
    };
    const stored = await Poliza.findByIdAndUpdate( id , {$set: poliza});
    res.status(201).send({ stored })
    
    
    // res.json( {status: console.log(poliza)});
}

polizaController.endosoPoliza = async (req, res) => {
    const { id } = req.params;
    const poliza = new Poliza({     
        nombrePropuesta : req.body.nombrePropuesta,
        nroPoliza: req.body.nroPoliza,
        fcPropuesta: req.body.fcPropuesta,
        nroPropuesta: req.body.nroPropuesta,
        nombreAseguradora: req.body.nombreAseguradora,
        ramo: req.body.ramo,
        montoAsegurado: req.body.montoAsegurado,        
        rutCliente: req.body.rutCliente,
        alias: req.body.alias,
        nombreCliente: req.body.nombreCliente,
        rutAcreedor: req.body.rutAcreedor,
        nombreAcreedor: req.body.nombreAcreedor,
        telefonoContacto: req.body.telefonoContacto,
        nombreContacto: req.body.nombreContacto,
        direccion: req.body.direccion,
        region: req.body.region,
        comuna: req.body.comuna,
        formaPago: req.body.formaPago,
        nroCuotas: req.body.nroCuotas,
        fcPrimeraCuota: req.body.fcPrimeraCuota,
        inicioVigencia: req.body.inicioVigencia,
        finVigencia: req.body.finVigencia,
        primaAfecta: req.body.primaAfecta,
        primaExenta: req.body.primaExenta,
        primaNeta: req.body.primaNeta,
        iva: req.body.iva,
        primaBruta: req.body.primaBruta,
        tipoMoneda: req.body.tipoMoneda,
        comisionExenta: req.body.comisionExenta,
        comisionAfecta: req.body.comisionAfecta,
        montoTotal: req.body.montoTotal,
        cobertura: req.body.cobertura,
        limites: req.body.limites,
        estado: req.body.estado,
        estadoPago: req.body.estadoPago,
        nombreReferido: req.body.nombreReferido,
        comisionReferido: req.body.comisionReferido,
        valorReferido: req.body.valorReferido,
        numeroEndoso: req.body.numeroEndoso,
        items: req.file.filename
    });
    if (req.file){
        const {filename} = req.file
        const full = req.hostname
        poliza.itemsUrl(filename, full)
    }
    res.json({
        'status':'Endoso Guardado Con Exito'
        });
    poliza.save();
}

polizaController.descPoliza = async (req, res) => {
    const id = await req.params.id
    const poliza = await Poliza.findById(id)
        res.json(poliza);     
}

polizaController.estado = async (req, res )=> {
   
    const { id } = req.params;
    const poliza = {     
        numeroPoliza : req.body.nroPoliza,
        nombrePropuesta : req.body.nombrePropuesta,
        nroPoliza: req.body.nroPoliza,
        fcPropuesta: req.body.fcPropuesta,
        nroPropuesta: req.body.nroPropuesta,
        nombreAseguradora: req.body.nombreAseguradora,
        ramo: req.body.ramo,
        montoAsegurado: req.body.montoAsegurado,        
        rutCliente: req.body.rutCliente,
        alias: req.body.alias,
        nombreCliente: req.body.nombreCliente,
        rutAcreedor: req.body.rutAcreedor,
        nombreAcreedor: req.body.nombreAcreedor,
        telefonoContacto: req.body.telefonoContacto,
        nombreContacto: req.body.nombreContacto,
        direccion: req.body.direccion,
        region: req.body.region,
        comuna: req.body.comuna,
        formaPago: req.body.formaPago,
        nroCuotas: req.body.nroCuotas,
        fcPrimeraCuota: req.body.fcPrimeraCuota,
        inicioVigencia: req.body.inicioVigencia,
        finVigencia: req.body.finVigencia,
        primaAfecta: req.body.primaAfecta,
        primaExenta: req.body.primaExenta,
        primaNeta: req.body.primaNeta,
        iva: req.body.iva,
        primaBruta: req.body.primaBruta,
        tipoMoneda: req.body.tipoMoneda,
        comisionExenta: req.body.comisionExenta,
        comisionAfecta: req.body.comisionAfecta,
        montoTotal: req.body.montoTotal,
        cobertura: req.body.cobertura,
        limites: req.body.limites,
        estado: req.body.estado,
        estadoPago: req.body.estadoPago,
        nombreReferido: req.body.nombreReferido,
        comisionReferido: req.body.comisionReferido,
        valorReferido: req.body.valorReferido,
        numeroEndoso: req.body.numeroEndoso,
        items: req.body.items
    };
    await Poliza.findByIdAndUpdate( id , {$set: poliza});
    res.json( {status: console.log(poliza)});
}

module.exports = polizaController;