import { Component, OnInit } from '@angular/core';
import { Poliza } from 'src/app/models/poliza';
import { PolizaService } from '../../services/poliza/poliza.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    public polizaService: PolizaService,
    private router: Router, 
    private route:ActivatedRoute,
    public modalService: NgbModal,
    private toastr: ToastrService )
  {  }

  toastrSucces(cuerpo, titulo){
    this.toastr.success(cuerpo, titulo);
  }
  
  toastrError(cuerpo, titulo){
    this.toastr.error(cuerpo, titulo);
  }

  ngOnInit(): void {
    this.polizaService.poliza = [];
    this.getPolizas();
    this._id = this.route.snapshot.params['_id'];
    this.dtOptions = {
      scrollY: true,
      sScroll: 100,
      scrollX: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        {
          extend: 'colvis',
          text: "Visibilidad Columnas"
        },
      {
        extend: 'excel',
        exportOptions: {
            columns: ':visible',
        },          
      }        
      ],
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ &eacute;l&eacute;ments",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    }; 
  }
  
  getPolizas()
  {
    this.polizaService.getPolizas()
      .subscribe(res => {
        this.polizaService.poliza = res as Poliza[];
        this.dtTrigger.next();
      })
  };

  traerPoliza(id){
    this.polizaService.mainPoliza(id)
      .subscribe(data => 
        {
          this.data = data;
          this.load(this.data);
        }
      ) 
  };
  
  load(polizaService: Poliza){
    this.polizaService.selectPoliza = polizaService;
  };

  editarEstado(form: NgForm){
    if (form.valid)
    {
      this.polizaService.estado(form.value)
      .subscribe(res => console.log(form.value));
      this.toastrSucces("Estado modificado satisfactoriamente", "Modificacion de estado extiosa!!");
    } else {
      this.toastrError("No se ha podido guardar el estado debido a un problema interno, intente más tarde", "Modificación Fallida!! ");
    } 
  };

  estadoPendiente(form: NgForm){
    form.value.estado = "EMISION"
    this.polizaService.selectPoliza.estado = "EMISION";
  };

  estadoCerrado(form: NgForm){
    form.value.estado = "INGRESADO"
    this.polizaService.selectPoliza.estado = "INGRESADO";
  };

  pagoPagado(form: NgForm){
    form.value.estadoPago = "PAGADO"
    this.polizaService.selectPoliza.estadoPago = "PAGADO";
  };

  pagoPendiente(form: NgForm){
    form.value.estadoPago = "PENDIENTE"
    this.polizaService.selectPoliza.estadoPago = "PENDIENTE";
    
  };

  pagoAtrasado(form: NgForm){
    form.value.estadoPago = "ATRASADO"
    this.polizaService.selectPoliza.estadoPago = "ATRASADO";
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