import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PolizaService } from '../../services/poliza/poliza.service';
import { Poliza } from 'src/app/models/poliza';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [PolizaService]
})

export class AgregarComponent implements OnInit {

date = new Date().toISOString().slice(0,10); 
  
  constructor(public poliza: PolizaService) { }

  public loadScript() {
    const node = document.createElement('script');
    node.src = 'assets/js/comuna.js'; // put there your js file location
    node.type = 'text/javascript';
    node.async = true;
   document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.poliza.poliza = [];
    this.loadScript();
    this.nroProp();
  }
  
  createPoliza(form: NgForm){
    this.poliza.selectPoliza.nombrePropuesta = "POLIZA";
    console.log(form.value)
    this.poliza.createPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida'));
  }

  nroProp(){
    this.poliza.nroPropuesta()
      .subscribe(res => {
        this.poliza.poliza = res as Poliza[];
        console.log(res);
        this.load(this.poliza.poliza);
      })
  }

  load(nro){
    this.poliza.selectPoliza.nroPropuesta = nro;
    this.poliza.selectPoliza.fcPropuesta = this.date;
  }

  calcularIva(){
    
  }

}
