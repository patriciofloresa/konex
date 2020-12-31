import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poliza } from 'src/app/models/poliza';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  selectPoliza: Poliza;
  poliza: Poliza[];
  readonly URI = 'http::3000';
  // readonly URI = 'http://25.1.200.237:3000'|| 'http://localhost:3000';
  constructor(private http: HttpClient) {
    this.selectPoliza = new Poliza();
  }

  createPoliza(poliza : Poliza, photo: File){
    const fd = new FormData();
    fd.append('numeroEndoso', poliza.numeroEndoso.toString());
    fd.append('nroPropuesta', poliza.nroPropuesta.toString());
    fd.append('nombrePropuesta', poliza.nombrePropuesta);
    fd.append('fcPropuesta', poliza.fcPropuesta); 
    fd.append('montoAsegurado', poliza.montoAsegurado.toString());
    fd.append('nombreAseguradora', poliza.nombreAseguradora); 
    fd.append('ramo', poliza.ramo);
    fd.append('nroPoliza', poliza.nroPoliza.toString());
    fd.append('alias', poliza.alias);
    fd.append('rutCliente', poliza.rutCliente);
    fd.append('nombreCliente', poliza.nombreCliente);
    fd.append('rutAcreedor', poliza.rutAcreedor);
    fd.append('nombreAcreedor', poliza.nombreAcreedor);
    fd.append('telefonoContacto', poliza.telefonoContacto.toString());
    fd.append('nombreContacto', poliza.nombreContacto);
    fd.append('direccion', poliza.direccion);
    fd.append('region', poliza.region);
    fd.append('comuna', poliza.comuna);
    fd.append('formaPago', poliza.formaPago);
    fd.append('nroCuotas', poliza.nroCuotas.toString());
    fd.append('fcPrimeraCuota', poliza.fcPrimeraCuota);
    fd.append('inicioVigencia', poliza.inicioVigencia);
    fd.append('finVigencia', poliza.finVigencia);
    fd.append('primaAfecta', poliza.primaAfecta.toString());
    fd.append('primaExenta', poliza.primaExenta.toString());
    fd.append('primaNeta', poliza.primaNeta.toString());
    fd.append('iva' , poliza.iva.toString());
    fd.append('primaBruta', poliza.primaBruta.toString());
    fd.append('tipoMoneda', poliza.tipoMoneda);
    fd.append('comisionExenta', poliza.comisionExenta.toString());
    fd.append('comisionAfecta', poliza.comisionAfecta.toString());
    fd.append('montoTotal', poliza.montoTotal.toString());
    fd.append('cobertura', poliza.cobertura);
    fd.append('limites', poliza.limites);
    fd.append('estado', poliza.estado);
    fd.append('estadoPago', poliza.estadoPago);
    fd.append('nombreReferido', poliza.nombreReferido);
    fd.append('comisionReferido', poliza.comisionReferido.toString());
    fd.append('valorReferido', poliza.valorReferido.toString());
    fd.append('items', photo);
    return this.http.post(this.URI+`/polizas/agregar`, fd);
  }

  nroPropuesta(){
    return this.http.get(this.URI+`/polizas/agregar`);
  }
  getPolizas(){
    return this.http.get(this.URI);
  }
  endPoliza(poliza : Poliza, photo: File){
    const fd = new FormData();
    fd.append('numeroEndoso', poliza.numeroEndoso.toString());
    fd.append('nroPropuesta', poliza.nroPropuesta.toString());
    fd.append('nombrePropuesta', poliza.nombrePropuesta);
    fd.append('fcPropuesta', poliza.fcPropuesta); 
    fd.append('montoAsegurado', poliza.montoAsegurado.toString());
    fd.append('nombreAseguradora', poliza.nombreAseguradora); 
    fd.append('ramo', poliza.ramo);
    fd.append('nroPoliza', poliza.nroPoliza.toString());
    fd.append('alias', poliza.alias);
    fd.append('rutCliente', poliza.rutCliente);
    fd.append('nombreCliente', poliza.nombreCliente);
    fd.append('rutAcreedor', poliza.rutAcreedor);
    fd.append('nombreAcreedor', poliza.nombreAcreedor);
    fd.append('telefonoContacto', poliza.telefonoContacto.toString());
    fd.append('nombreContacto', poliza.nombreContacto);
    fd.append('direccion', poliza.direccion);
    fd.append('region', poliza.region);
    fd.append('comuna', poliza.comuna);
    fd.append('formaPago', poliza.formaPago);
    fd.append('nroCuotas', poliza.nroCuotas.toString());
    fd.append('fcPrimeraCuota', poliza.fcPrimeraCuota);
    fd.append('inicioVigencia', poliza.inicioVigencia);
    fd.append('finVigencia', poliza.finVigencia);
    fd.append('primaAfecta', poliza.primaAfecta.toString());
    fd.append('primaExenta', poliza.primaExenta.toString());
    fd.append('primaNeta', poliza.primaNeta.toString());
    fd.append('iva' , poliza.iva.toString());
    fd.append('primaBruta', poliza.primaBruta.toString());
    fd.append('tipoMoneda', poliza.tipoMoneda);
    fd.append('comisionExenta', poliza.comisionExenta.toString());
    fd.append('comisionAfecta', poliza.comisionAfecta.toString());
    fd.append('montoTotal', poliza.montoTotal.toString());
    fd.append('cobertura', poliza.cobertura);
    fd.append('limites', poliza.limites);
    fd.append('estado', poliza.estado);
    fd.append('estadoPago', poliza.estadoPago);
    fd.append('nombreReferido', poliza.nombreReferido);
    fd.append('comisionReferido', poliza.comisionReferido.toString());
    fd.append('valorReferido', poliza.valorReferido.toString());
    fd.append('items', photo);
    return this.http.post(this.URI+`/polizas/editar`,fd);
  }
  descPoliza(id){
    return this.http.get(this.URI+`/polizas/descargar/`+id).pipe(map(res => res ))
  }
  getPoliza(id){
    return this.http.get(this.URI+`/polizas/descargar/`+id).pipe(map(res => res ))
  }
  mainPoliza(id){
    return this.http.get(this.URI+`/`+id).pipe(map(res => res ))
  }
  editPoliza(poliza : Poliza, photo: File){
    if (photo != undefined || photo != null)
    {
      const fd = new FormData();
      fd.append('numeroEndoso', poliza.numeroEndoso.toString());
      fd.append('nroPropuesta', poliza.nroPropuesta.toString());
      fd.append('nombrePropuesta', poliza.nombrePropuesta);
      fd.append('fcPropuesta', poliza.fcPropuesta); 
      fd.append('montoAsegurado', poliza.montoAsegurado.toString());
      fd.append('nombreAseguradora', poliza.nombreAseguradora); 
      fd.append('ramo', poliza.ramo);
      fd.append('nroPoliza', poliza.nroPoliza.toString());
      fd.append('alias', poliza.alias);
      fd.append('rutCliente', poliza.rutCliente);
      fd.append('nombreCliente', poliza.nombreCliente);
      fd.append('rutAcreedor', poliza.rutAcreedor);
      fd.append('nombreAcreedor', poliza.nombreAcreedor);
      fd.append('telefonoContacto', poliza.telefonoContacto.toString());
      fd.append('nombreContacto', poliza.nombreContacto);
      fd.append('direccion', poliza.direccion);
      fd.append('region', poliza.region);
      fd.append('comuna', poliza.comuna);
      fd.append('formaPago', poliza.formaPago);
      fd.append('nroCuotas', poliza.nroCuotas.toString());
      fd.append('fcPrimeraCuota', poliza.fcPrimeraCuota);
      fd.append('inicioVigencia', poliza.inicioVigencia);
      fd.append('finVigencia', poliza.finVigencia);
      fd.append('primaAfecta', poliza.primaAfecta.toString());
      fd.append('primaExenta', poliza.primaExenta.toString());
      fd.append('primaNeta', poliza.primaNeta.toString());
      fd.append('iva' , poliza.iva.toString());
      fd.append('primaBruta', poliza.primaBruta.toString());
      fd.append('tipoMoneda', poliza.tipoMoneda);
      fd.append('comisionExenta', poliza.comisionExenta.toString());
      fd.append('comisionAfecta', poliza.comisionAfecta.toString());
      fd.append('montoTotal', poliza.montoTotal.toString());
      fd.append('cobertura', poliza.cobertura);
      fd.append('limites', poliza.limites);
      fd.append('estado', poliza.estado);
      fd.append('estadoPago', poliza.estadoPago);
      fd.append('nombreReferido', poliza.nombreReferido);
      fd.append('comisionReferido', poliza.comisionReferido.toString());
      fd.append('valorReferido', poliza.valorReferido.toString());
      fd.append('items', photo);
      return this.http.put(this.URI+`/polizas/editar/${poliza._id}`,fd)
    }
    return this.http.put(this.URI+`/polizas/editar/${poliza._id}`,poliza)
  }
  estado(poliza: Poliza){
    return this.http.put(this.URI+`/${poliza._id}`,poliza)
  }
}
