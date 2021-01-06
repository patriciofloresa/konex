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
  readonly URI = 'http://localhost:3000';
  // readonly URI = 'http://25.1.200.237:3000'|| 'http://localhost:3000';
  constructor(private http: HttpClient) {
    this.selectPoliza = new Poliza();
  }

  createPoliza(poliza : Poliza){
    return this.http.post(this.URI+`/polizas/agregar`, poliza);
  }

  nroPropuesta(){
    return this.http.get(this.URI+`/polizas/agregar`);
  }
  getPolizas(){
    return this.http.get(this.URI);
  }
  endPoliza(poliza : Poliza){
    return this.http.post(this.URI+`/polizas/editar`,poliza);
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
  editPoliza(poliza : Poliza){
    return this.http.put(this.URI+`/polizas/editar/${poliza._id}`,poliza)
  }
  estado(poliza: Poliza){
    return this.http.put(this.URI+`/${poliza._id}`,poliza)
  }
}
