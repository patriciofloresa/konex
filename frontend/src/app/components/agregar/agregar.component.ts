import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PolizaService } from '../../services/poliza/poliza.service';
import { Poliza } from 'src/app/models/poliza';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [PolizaService,  ]
})

export class AgregarComponent implements OnInit, OnDestroy {

  date = new Date().toISOString().slice(0,10); 
  name: any;
  items: any;
  inicioVigencia = new Date().toISOString().slice(0,10);
  finVigencia = new Date(new Date().setFullYear( new Date().getFullYear()+1)).toISOString().slice(0,10);
  primeraCuota = new Date(new Date().setMonth( new Date().getMonth()+1)).toISOString().slice(0,10);
  public Editor = ClassicEditor;

  constructor(
    public poliza: PolizaService,
    private toastr: ToastrService,
    private http: HttpClient
    ){ }

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
  
  ngOnDestroy(): void {
  }
  
  createPoliza(form: NgForm){
    try {
      if(form.valid)
      {
        if (this.poliza.createPoliza(form.value)
        .subscribe(res => console.log('Propuesta Añadida'))){
          this.toastrSucces();
        }
      }
    } catch (error) {
      console.log(error)
      this.toastrError();
    } 
  }

  toastrSucces(){
    this.toastr.success('Se ha guardado la propuesta correctamente', 'Éxito!!');
  }
  
  toastrError(){
    this.toastr.error('No se ha podido  guardar la póliza, revise que los campos esten correctamente llenado', 'Error!!')
  }

  nroProp(){
    this.poliza.nroPropuesta()
      .subscribe(res => {
        this.poliza.poliza = res as Poliza[];
        console.log(res)
        this.load(this.poliza.poliza);
      })
  }

  load(nro){
    this.poliza.selectPoliza.nroPropuesta = nro;
    this.poliza.selectPoliza.fcPropuesta = this.date;
    this.poliza.selectPoliza.inicioVigencia = this.inicioVigencia;
    this.poliza.selectPoliza.finVigencia = this.finVigencia;
    this.poliza.selectPoliza.formaPago = "PAC";
    this.poliza.selectPoliza.fcPrimeraCuota = this.primeraCuota;
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
