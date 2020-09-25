const Poliza = require("../models/poliza");

//se crea objeto objeto poliza
const polizaController = {};

polizaController.getPolizas = async(req, res) => {
    const polizas = await Poliza.find();
    res.json(polizas);
}

polizaController.createPoliza = async (req, res) => {
   const poliza = new Poliza(req.body)
   console.log(poliza);
   poliza.save();
   res.json({
    'status':'Poliza Guardada'
    });   
}

polizaController.getPoliza = async(req, res) => {
    const poliza = await Poliza.findById(req.params.id);
    console.log('---poliza encontrada---')
    res.json(poliza);
}

polizaController.getLastNroPropuesta = async(req, res) => {
    const poliza = await Poliza.findOne({$query: {}, $orderby: {$natural : -1}});
    res.json(poliza.nroPropuesta);
}

polizaController.editPoliza = async(req, res) => {

    const poliza = {       
        nombreAseguradora: req.body.nombreAseguradora,
        ramo: req.body.ramo,
        montoAsegurado: req.body.montoAsegurado,        
        rutCliente: req.body.rutCliente,
        alias: req.body.alias,
        nombreCliente: req.body.nombreCliente,
        rutAcreedor: req.body.rutAcreedor,
        nombreAcreedor: req.body.nombreAcreedor,
        rutMandante: req.body.rutMandante,
        nombreMandante: req.body.nombreMandante,
        direccion: req.body.direccion,
        region: req.body.region,
        comuna: req.body.comuna,
        comisionKonex: req.body.comisionKonex,
        formaPago: req.body.formaPago,
        nroCuotas: req.body.nroCuotas,
        fcPrimeraCuota: req.body.fcPrimeraCuota,
        comisionEmpresa: req.body.comisionEmpresa,
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
        cobertua: req.body.cobertua,
        limites: req.body.limites,
        items: req.body.items
    };

    await Poliza.findByIdAndUpdate(req.params.id, poliza)
        .then(() => res.sendStatus(204));
}

polizaController.incPoliza = async(req, res) => {

}

polizaController.excPoliza = async(req, res) => {

}

polizaController.anuPoliza = async(req, res) => {
    const poliza = {       
        estado: req.body.estado,
        estadoPago: req.body.estadoPago
    };

    await Poliza.findByIdAndUpdate(req.params.id, poliza)
        .then(() => res.sendStatus(204));
}

polizaController.canPoliza = async(req, res) => {
    const poliza = {       
        estado: req.body.estado,
        estadoPago: req.body.estadoPago
    };
    console.log(poliza)
    await Poliza.findByIdAndUpdate(req.params.id, poliza)
        .then(() => res.sendStatus(204));
}

module.exports = polizaController;