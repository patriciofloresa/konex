export class Poliza {

    constructor(_id = "", nombrePropuesta = "POLIZA", nroPoliza = 0, fcPropuesta = Date.now().toString(), montoAsegurado=0, nombreAseguradora = "" , alias = "",ramo = "",rutCliente = "", nombreCliente = "", rutAcreedor = "", nombreAcreedor = "",
    telefonoContacto = 0, nombreContacto = "", direccion = "", region = "", comuna = "", formaPago = "", nroCuotas = 0, fcPrimeraCuota = Date.now.toString(), comisionEmpresa = 0, inicioVigencia = Date.now.toString(),
    finVigencia = Date.now.toString(), primaAfecta = 0, primaExenta = 0, primaNeta = 0, iva = 0, primaBruta = 0, tipoMoneda = "", comisionExenta = 0, comisionAfecta = 0, montoTotal = 0, cobertura = "",
    limites = "", estado = "EMISION", estadoPago = "PENDIENTE", nombreReferido = "", comisionReferido = 0, valorReferido = 0, numeroEndoso = 0, items = "")
    {
        this._id = _id;
        this.numeroEndoso = numeroEndoso;
        this.nombrePropuesta = nombrePropuesta;
        this.fcPropuesta = fcPropuesta; 
        this.montoAsegurado = montoAsegurado;
        this.nombreAseguradora = nombreAseguradora; 
        this.ramo= ramo;
        this.nroPoliza = nroPoliza;
        this.alias = alias;
        this.rutCliente= rutCliente;
        this.nombreCliente= nombreCliente;
        this.rutAcreedor= rutAcreedor;
        this.nombreAcreedor= nombreAcreedor;
        this.telefonoContacto= telefonoContacto;
        this.direccion= direccion;
        this.region= region;
        this.comuna= comuna;
        this.formaPago= formaPago;
        this.nroCuotas= nroCuotas;
        this.fcPrimeraCuota=  fcPrimeraCuota;
        this.inicioVigencia= inicioVigencia;
        this.finVigencia= finVigencia;
        this.primaAfecta= primaAfecta;
        this.primaExenta= primaExenta;
        this.primaNeta= primaNeta;
        this.iva= iva;
        this.primaBruta= primaBruta;
        this.tipoMoneda= tipoMoneda;
        this.comisionExenta= comisionExenta;
        this.comisionAfecta= comisionAfecta;
        this.montoTotal= montoTotal;
        this.cobertura=cobertura;
        this.limites= limites;
        this.estado= estado;
        this.estadoPago= estadoPago;
        this.nombreContacto = nombreContacto;
        this.nombreReferido = nombreReferido;
        this.comisionReferido = comisionReferido;
        this.valorReferido = valorReferido;
        this.items = items;
    }

    _id: string;
    numeroEndoso: Number;
    nombrePropuesta: string;
    montoAsegurado: Number;
    fcPropuesta : string;
    nroPoliza : Number;
    nroPropuesta: Number;
    nombreAseguradora: string;
    alias: string;
    ramo: string;
    rutCliente: string;
    nombreCliente: string;
    rutAcreedor: string;
    nombreAcreedor: string;
    telefonoContacto: Number;
    nombreContacto: string;
    direccion: string;
    region: string;
    comuna: string;
    formaPago: string;
    nroCuotas: Number;
    fcPrimeraCuota:  string;
    inicioVigencia: string;
    finVigencia: string;
    primaAfecta: Number;
    primaExenta: Number;
    primaNeta: Number;
    iva: Number;
    primaBruta: Number;
    tipoMoneda: string;
    comisionExenta: Number;
    comisionAfecta: Number;
    montoTotal: Number;
    cobertura: string;
    limites: string;
    items: string;
    estado: string;
    estadoPago: string;
    nombreReferido: string;
    comisionReferido: Number;
    valorReferido: Number;
}
