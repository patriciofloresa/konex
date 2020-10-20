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

  nroPropuesta(){
    return this.http.get(this.URL_API+`/polizas/agregar`);
  }

  getPolizas(){
    return this.http.get(this.URL_API);
  }

  incPoliza(poliza: Poliza){
    return this.http.post(this.URL_API+`/polizas/editar`,poliza);
  }

  excPoliza(poliza: Poliza){
    return this.http.post(this.URL_API+`/polizas/editar`, poliza);
  }

  anularPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/editar/${poliza._id}`,poliza);
  }
  modPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/editar/${poliza._id}`,poliza);
  }
  canPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/editar/${poliza._id}`,poliza);
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

  mainPoliza(id){
    return this.http.get(this.URL_API+`/`+id).pipe(map(res => res ))
  }

  editPoliza(poliza: Poliza){
    return this.http.put(this.URL_API+`/polizas/editar/${poliza._id}`,poliza);
  }

  estado(poliza: Poliza){
    return this.http.put(this.URL_API+`/${poliza._id}`,poliza);
  }
}
