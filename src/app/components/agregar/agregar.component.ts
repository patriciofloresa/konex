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
    if(form.valid)
      this.poliza.createPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida'));
    else
      console.log("error, weas vacias")
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

  calcularIva(afecta){
    this.poliza.selectPoliza.iva = parseFloat((afecta * 0.19).toFixed(2))
    console.log("Iva: "+this.poliza.selectPoliza.iva);
    return this.poliza.selectPoliza.iva;
  }
  calcularNeta(afecta, exenta){
    this.poliza.selectPoliza.primaNeta = (afecta + exenta);
    console.log("Neta: "+this.poliza.selectPoliza.primaNeta);
    this.calcularBruta(this.poliza.selectPoliza.primaNeta, this.calcularIva(afecta))
    return this.poliza.selectPoliza.primaNeta;
  }

  calcularBruta(neta, iva){
    this.poliza.selectPoliza.primaBruta = (neta + iva);
    console.log("bruta: " + this.poliza.selectPoliza.primaBruta);
    return this.poliza.selectPoliza.primaBruta;
  }

  calcularKonex(comisionAfecta, comisionExenta, afecta, exenta){
    const a = (afecta * (comisionAfecta/100));
    const b = exenta * (comisionExenta/100);
    console.log("A: "+a + "B: "+b);
    this.poliza.selectPoliza.montoTotal = parseFloat(( a + b ).toFixed(2));
    console.log("comision Konex: "+ this.poliza.selectPoliza.montoTotal)
    return this.poliza.selectPoliza.montoTotal;
  } 

  calcReferido(x){
    const a = this.calcularKonex(this.poliza.selectPoliza.comisionAfecta, this.poliza.selectPoliza.comisionExenta, this.poliza.selectPoliza.primaAfecta, this.poliza.selectPoliza.primaExenta)
    console.log( a );
    this.poliza.selectPoliza.comisionReferido = parseFloat((+a * (x / 100)).toFixed(2));
    console.log("referido: "+this.poliza.selectPoliza.comisionReferido)
  }
}
