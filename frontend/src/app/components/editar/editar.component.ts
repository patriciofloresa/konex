import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  img: any;
  items: File;

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
    public poliza: PolizaService,
    private toastr: ToastrService
  ) {
  }
 
  
  onFileSelect(event)
  {
    this.items = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.img = reader.result;
    reader.readAsDataURL(this.items);
  }
  toastrSucces(cuerpo, titulo){
    this.toastr.success(cuerpo, titulo);
  }
  toastrError(cuerpo, titulo){
    this.toastr.error(cuerpo, titulo);
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
    node.src = 'assets/js/comuna.js';
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
    else if (this.polizaForm.value.nombrePropuesta == "MODIFICACION")
      this.editar = true;
    else if (this.polizaForm.value.nombrePropuesta == "INCORPORACION")
      this.incorporar = true;
    else if (this.polizaForm.value.nombrePropuesta == "EXCLUSION")
      this.excluir = true;
    else if (this.polizaForm.value.nombrePropuesta == "ANULACION")
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
    
    if(form.valid)
    {
      this.poliza.editPoliza(form.value, this.items)
      .subscribe(res => console.log('Propuesta Editada'));
      this.toastrSucces("Se ha editado correctamente la propuesta, será redirigido pronto a su descarga","Edición exitosa!!");
    }
    else
    {
      this.toastrError("Error interno no deja realizar la accion de editar", "Error")
    }
  }
  //metodo para endoso de incorporacion
  incorporarPropuesta(form: NgForm){
    form.value.nombrePropuesta = "INCORPORACION"
    this.poliza.selectPoliza.nombrePropuesta = "INCORPORACION";
    
    if(form.valid) {
      this.poliza.endPoliza(form.value, this.items)
      .subscribe(res => console.log('Propuesta Añadida(incorporacion)'));
      this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga","Incorporación exitosa!!");
    } else  {
      this.toastrError("Error interno no deja realizar la accion de incorporar", "Error")
    }
      
  }
  //metodo para endoso de exclusion
  excluirPropuesta(form: NgForm){
    form.value.nombrePropuesta = "EXCLUSION"
    this.poliza.selectPoliza.nombrePropuesta = "EXCLUSION";
    
    if (form.valid) {
        this.poliza.endPoliza(form.value, this.items)
        .subscribe(res => console.log('Propuesta Añadida(exclucion)'));
        this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga","Exclusión exitosa!!");
      } else  {
        this.toastrError("Error interno no deja realizar la accion de excluir", "Error")
      }
  }
  //metodo para endoso de modificacion
  modificarPropuesta(form: NgForm){
    form.value.nombrePropuesta = "MODIFICACION"
    this.poliza.selectPoliza.nombrePropuesta = "MODIFICACION";
    
    if (form.valid) {
      this.poliza.endPoliza(form.value, this.items)
      .subscribe(res => console.log('Propuesta Añadida(modificacion)'));
      this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga","Modificación exitosa!!");
    } else {
      this.toastrError("Error interno no deja realizar la accion de modificar", "Error")
    }
  }
  //metodo para endoso de anulacion
  anularPropuesta(form: NgForm){
    form.value.nombrePropuesta = "ANULACION"
    this.poliza.selectPoliza.nombrePropuesta = "ANULACION";
    if (form.valid) {
      this.poliza.endPoliza(form.value, this.items)
      .subscribe(res => console.log('Propuesta Añadida(anulacion)'));
      this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga","Anulación exitosa!!");
    } else {
      this.toastrError("Error interno no deja realizar la accion de anular", "Error")
    }
    
  }
  //metodo para endoso de cancelacion
  cancelarPropuesta(form: NgForm){
    form.value.nombrePropuesta = "CANCELACION"
    this.poliza.selectPoliza.nombrePropuesta = "CANCELACION";
    if (form.valid) {
      this.poliza.endPoliza(form.value, this.items)
      .subscribe(res => console.log('Propuesta Añadida(cancelacion)'));
      this.toastrSucces("Se ha generado correctamente la propuesta, será redirigido pronto a su descarga","Cancelación exitosa!!")
    } else {
      this.toastrError("Error interno no deja realizar la accion de cancelar", "Error")
    }
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
    this.poliza.selectPoliza.primaBruta = ((neta + iva).toFixed(2));
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
