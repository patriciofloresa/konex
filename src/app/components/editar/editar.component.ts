import { analyzeAndValidateNgModules } from '@angular/compiler';
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
  editar:boolean= false;
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
  }
//metodo para editar propuesta
  editarPropuesta(form: NgForm){
    form.value.nombrePropuesta="POLIZA";
    form.value.nombrePropuesta = "POLIZA";
    console.log(form.value)
    this.traerPoliza();
    this.poliza.editPoliza(form.value)
      .subscribe(res => console.log(form.value));
  }
  //metodo para endoso de incorporacion
  incorporarPropuesta(form: NgForm){
    form.value.nombrePropuesta = "INCORPORAR"
    this.poliza.selectPoliza.nombrePropuesta = "INCORPORAR";
    this.poliza.incPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida(incorporacion)'));
      
  }
  //metodo para endoso de exclusion
  excluirPropuesta(form: NgForm){
    form.value.nombrePropuesta = "EXCLUIR"
    this.poliza.selectPoliza.nombrePropuesta = "EXCLUIR";
    console.log(form.value)
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

  calcularIva(value){
    this.poliza.selectPoliza.iva = value * 0.19
    console.log(this.poliza.selectPoliza.iva)
    return this.poliza.selectPoliza.iva;

  }
  calcularNeta(){

  }
  calcularKonex(){

  }
}
