export class Poliza {

    constructor(_id = "", nombrePropuesta = "-", nroPoliza = "", fcPropuesta = Date.toString(), montoAsegurado=0, nombreAseguradora = "" , alias = "",ramo = "",rutCliente = "", nombreCliente = "", rutAcreedor = "", nombreAcreedor = "",
    telefonoContacto = "", nombreContacto = "", direccion = "", region = "", comuna = "", formaPago = "", nroCuotas = 0, fcPrimeraCuota = Date.now.toString(), comisionEmpresa = 0, inicioVigencia = Date.now.toString(),
    finVigencia = Date.now.toString(), primaAfecta = 0, primaExenta = 0, primaNeta = 0, iva = 0, primaBruta = 0, tipoMoneda = "", comisionExenta = 0, comisionAfecta = 0, montoTotal = 0, cobertura = " ",
    limites = " ", items = " ", estado = "Vigente", estadoPago = "Por Cancelar", nombreReferido = "", comisionReferido = 0)
    {
        this._id = _id;
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
        this.nombreContacto= nombreContacto;
        this.direccion= direccion;
        this.region= region;
        this.comuna= comuna;
        this.formaPago= formaPago;
        this.nroCuotas= nroCuotas;
        this.fcPrimeraCuota=  fcPrimeraCuota;
        this.comisionEmpresa= comisionEmpresa;
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
        this.items= items;
        this.estado= estado;
        this.estadoPago= estadoPago;
        this.nombreContacto = nombreContacto;
        this.nombreReferido = nombreReferido;
        this.comisionReferido = comisionReferido;
    }

    _id: string;
    nombrePropuesta: String;
    montoAsegurado: Number;
    fcPropuesta : String;
    nroPoliza : String;
    nroPropuesta: Number;
    nombreAseguradora: String;
    alias: String;
    ramo: String;
    rutCliente: String;
    nombreCliente: String;
    rutAcreedor: String;
    nombreAcreedor: String;
    telefonoContacto: String;
    nombreContacto: String;
    direccion: String;
    region: String;
    comuna: String;
    formaPago: String;
    nroCuotas: Number;
    fcPrimeraCuota:  String;
    comisionEmpresa: Number;
    inicioVigencia: String;
    finVigencia: String;
    primaAfecta: Number;
    primaExenta: Number;
    primaNeta: Number;
    iva: Number;
    primaBruta: Number;
    tipoMoneda: String;
    comisionExenta: Number;
    comisionAfecta: Number;
    montoTotal: Number;
    cobertura: String;
    limites: String;
    items: String;
    estado: String;
    estadoPago: String;
    nombreReferido: String;
    comisionReferido: Number;

}
