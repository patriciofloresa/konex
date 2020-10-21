import { analyzeAndValidateNgModules } from '@angular/compiler';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Poliza } from 'src/app/models/poliza';
import { PolizaService } from '../../services/poliza/poliza.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [PolizaService]
})
export class EditarComponent implements OnInit {

  nombre: string;
  editar:boolean= true;
  incorporar:boolean=false;
  excluir:boolean=false;
  modificar: boolean=false;
  anular:boolean=false;
  cancelar:boolean=false;

  //Para los Cálculos
  iva: number;

  //Para los valores existentes
  data:any;
  _id:any;

  //Inicializar la fecha para distintos Endosos
  date = new Date().toISOString().slice(0,10);

  polizaForm: NgForm
  constructor(
    private route:ActivatedRoute,
    public poliza: PolizaService
  ) { 

  }

  ngOnInit(): void {
    this.loadScript();
    this._id = this.route.snapshot.params['_id'];
    this.traerPoliza();
  }

  nroProp(){
    this.poliza.nroPropuesta()
      .subscribe(res => {
        this.poliza.poliza = res as Poliza[];
        console.log(res);
        this.initNroDate(this.poliza.poliza);
      })
  }

  initNroDate(nro){
    this.poliza.selectPoliza.nroPropuesta = nro;
    this.poliza.selectPoliza.fcPropuesta = this.date;
  }

  public loadScript() {
    const node = document.createElement('script');
    node.src = 'assets/js/comuna.js'; // put there your js file location
    node.type = 'text/javascript';
    node.async = true;
   document.getElementsByTagName('head')[0].appendChild(node);
  }
//traemos la poliza
  traerPoliza(){
    this.poliza.getPoliza(this._id)
    .subscribe(data => 
      {
        this.data = data;
        this.load(this.data);
        console.log(this.data);
      }
    ) 
  }
  header(){
    if (this.polizaForm.value.nombrePropuesta == "POLIZA")
      this.editar = true
    else if (this.polizaForm.value.nombrePropuesta == "MODIFICAR")
      this.editar = true;
    else if (this.polizaForm.value.nombrePropuesta == "INCORPORAR")
      this.incorporar = true;
    else if (this.polizaForm.value.nombrePropuesta == "EXCLUSION")
      this.excluir = true;
    else if (this.polizaForm.value.nombrePropuesta == "ANULAR")
      this.anular = true;
    else
      this.cancelar = true;
  }
//cargamos la poliza
  load(poliza: Poliza){
    this.poliza.selectPoliza = poliza;
    if (this.poliza.selectPoliza.region)
      this.poliza.selectPoliza.comuna
  }
  
//metodo para editar propuesta
  editarPropuesta(form: NgForm){
    form.value.nombrePropuesta="POLIZA";
    this.poliza.selectPoliza.nombrePropuesta = "POLIZA";
    if(form.valid)
      console.log(form.value)
      this.poliza.editPoliza(form.value)
        .subscribe(res => console.log('Propuesta Editada'));
  }
  //metodo para endoso de incorporacion
  incorporarPropuesta(form: NgForm){
    form.value.nombrePropuesta = "INCORPORAR"
    this.poliza.selectPoliza.nombrePropuesta = "INCORPORAR";
    if(form.valid)
     this.poliza.incPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida(incorporacion)'));
      
  }
  //metodo para endoso de exclusion
  excluirPropuesta(form: NgForm){
    form.value.nombrePropuesta = "EXCLUIR"
    this.poliza.selectPoliza.nombrePropuesta = "EXCLUIR";
    console.log(form.value)
    if (form.valid)
      this.poliza.excPoliza(form.value)
        .subscribe(res => console.log('Propuesta Añadida(exclucion)'));
  }
  modificarPropuesta(form: NgForm){
    form.value.nombrePropuesta = "MODIFICAR"
    this.poliza.selectPoliza.nombrePropuesta = "MODIFICAR";
    console.log(form.value)
    this.poliza.modPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida(modificacion)'));
  }
  anularPropuesta(form: NgForm){
    form.value.nombrePropuesta = "ANULAR"
    this.poliza.selectPoliza.nombrePropuesta = "ANULAR";
    console.log(form.value)
    this.poliza.anularPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida(anulacion)'));
  }
  cancelarPropuesta(form: NgForm){
    form.value.nombrePropuesta = "CANCELAR"
    this.poliza.selectPoliza.nombrePropuesta = "CANCELAR";
    console.log(form.value)
    this.poliza.canPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida(cancelacion)'));
  }

  editarBtn(){
    this.traerPoliza();
    this.editar=true;
    this.incorporar=false;
    this.excluir=false;
    this.anular=false;
    this.cancelar=false;
    this.modificar=false;
  }
  incorporarBtn(){
    this.nroProp();
    this.editar=false;
    this.incorporar=true;
    this.excluir=false;
    this.anular=false;
    this.cancelar=false;
    this.modificar=false;
  }
  excluirBtn(){
    this.nroProp();
    this.editar=false;
    this.incorporar=false;
    this.excluir=true;
    this.anular=false;
    this.cancelar=false;
    this.modificar=false;
  }
  modificarBtn(){
    this.nroProp();
    this.editar=false;
    this.incorporar=false;
    this.excluir=false;
    this.anular=false;
    this.cancelar=false;
    this.modificar=true;
  }
  anularBtn(){
    this.nroProp();
    this.editar=false;
    this.incorporar=false;
    this.excluir=false;
    this.anular=true;
    this.cancelar=false;
    this.modificar=false;
  }
  cancelarBtn(){
    this.nroProp();
    this.editar=false;
    this.incorporar=false;
    this.excluir=false;
    this.anular=false;
    this.cancelar=true;
    this.modificar=false;
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
