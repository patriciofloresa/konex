import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poliza } from 'src/app/models/poliza';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  selectPoliza: Poliza;
  readonly URL_API = "http://localhost:4000/"
  constructor(private http: HttpClient) { }

  postPoliza(poliza: Poliza){
    return this.http.post(this.URL_API+`polizas/agregar`, poliza);
  }

  getPolizas(){
    return this.http.get(this.URL_API);
  }

  modPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`polizas/modificar/${poliza._id}`,poliza);
  }

  incPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`polizas/incorporar/${poliza._id}`,poliza);
  }

  excPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`polizas/excluir/${poliza._id}`,poliza);
  }

  anularPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`polizas/modificar/${poliza._id}`,poliza);
  }
  
  canPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`polizas/cancelar/${poliza._id}`,poliza);
  }

  hisPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`polizas/historial/${poliza._id}`,poliza);
  }
  
}
