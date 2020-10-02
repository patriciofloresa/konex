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
  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.selectPoliza = new Poliza();
  }

  createPoliza(poliza: Poliza){
    return this.http.post(this.URL_API+`/polizas/agregar`, poliza);
  }

  getPolizas(){
    return this.http.get(this.URL_API);
  }

  modPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/modificar/${poliza._id}`,poliza);
  }

  excPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/excluir/${poliza._id}`,poliza);
  }

  anularPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/modificar/${poliza._id}`,poliza);
  }
  
  canPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/cancelar/${poliza._id}`,poliza);
  }

  hisPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/historial/${poliza._id}`,poliza);
  }
  
  descPoliza(id){
    return this.http.get(this.URL_API+`/polizas/descargar/`+id).pipe(map(res => res ))
  };
  
  getPoliza(id){
    return this.http.get(this.URL_API+`/polizas/descargar/`+id).pipe(map(res => res ))
  }

  editPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/editar/${poliza._id}`,poliza);
  }

  enviada(poliza: Poliza){
    return this.http.put(this.URL_API+`/${poliza._id}`, poliza);
  }
}
