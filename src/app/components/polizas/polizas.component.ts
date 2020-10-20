import { Component, OnInit } from '@angular/core';
import { Poliza } from 'src/app/models/poliza';
import { PolizaService } from '../../services/poliza/poliza.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { formatNumber, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css'],
  providers: [PolizaService]
})
export class PolizasComponent implements OnInit {

  closeResult = '';
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  //Para los valores existentes
  data:any;
  _id:any;

  polizaForm: NgForm

  constructor(public polizaService: PolizaService,private router:Router, private route:ActivatedRoute,
    public modalService: NgbModal )
  {  }

  ngOnInit(): void {
    this.polizaService.poliza = [];
    this.getPolizas();
    this._id = this.route.snapshot.params['_id'];
    this.dtOptions = {
      scrollY: true,
      scrollX: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'colvis',
      {
          extend: 'excelHtml5',
          exportOptions: {
              columns: ':visible'
          }
      }        
      ] 
    };
  }
  
  getPolizas()
  {
    this.polizaService.getPolizas()
      .subscribe(res => {
        this.polizaService.poliza = res as Poliza[];
        console.log(res);
        this.dtTrigger.next();
      })
  };

  traerPoliza(id){
    console.log("traer poliza id: "+id);
    this.polizaService.mainPoliza(id)
      .subscribe(data => 
        {
          this.data = data;
          console.log(" Traer Poliza data: " + JSON.stringify(this.data));
          this.load(this.data);
        }
      ) 
  };
  
  load(polizaService: Poliza){
    this.polizaService.selectPoliza = polizaService;
    console.log("LoadPoliza" + JSON.stringify(this.polizaService.selectPoliza));
  };

  editarEstado(form: NgForm){
     console.log(form.value)
    this.polizaService.estado(form.value)
      .subscribe(res => console.log(form.value)
    );
    window.location.reload();
  };

  estadoEnviado(form: NgForm){
    console.log("value form enviado: " +JSON.stringify(form.value))
    form.value.estado = "ENVIADO"
    this.polizaService.selectPoliza.estado = "ENVIADO";
    console.log(this.polizaService.selectPoliza.estado);
  };

  estadoPendiente(form: NgForm){
    console.log("value form pendiente: " +JSON.stringify(form.value))
    form.value.estado = "PENDIENTE"
    this.polizaService.selectPoliza.estado = "PENDIENTE";
    console.log(this.polizaService.selectPoliza.estado);
  };

  estadoCerrado(form: NgForm){
    console.log("value form cerrado: " +JSON.stringify(form.value))
    form.value.estado = "CERRADO"
    this.polizaService.selectPoliza.estado = "CERRADO";
    console.log(this.polizaService.selectPoliza.estado);
  };
  pagoPagado(form: NgForm){
    console.log("value form enviado: " +JSON.stringify(form.value))
    form.value.estadoPago = "PAGADO"
    this.polizaService.selectPoliza.estadoPago = "PAGADO";
    console.log(this.polizaService.selectPoliza.estadoPago);
  };

  pagoPendiente(form: NgForm){
    console.log("value form pendiente: " +JSON.stringify(form.value))
    form.value.estadoPago = "PENDIENTE"
    this.polizaService.selectPoliza.estadoPago = "PENDIENTE";
    console.log(this.polizaService.selectPoliza.estadoPago);
  };

  pagoAtrasado(form: NgForm){
    console.log("value form cerrado: " +JSON.stringify(form.value))
    form.value.estadoPago = "ATRASADO"
    this.polizaService.selectPoliza.estadoPago = "ATRASADO";
    console.log(this.polizaService.selectPoliza.estadoPago);
  };

  //abrir Modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  };

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  };


}  