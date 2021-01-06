import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PolizaService } from '../../services/poliza/poliza.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css'],
  providers: [PolizaService]
})
export class DescargarComponent implements OnInit {

  data:any;
  _id:any;
  items: any;
  propuesta = "";
  constructor(
    private route:ActivatedRoute,
    public poliza: PolizaService,
    private toastr: ToastrService,
    private _sanitizer: DomSanitizer)
  {

  }

  toastrSucces(cuerpo, titulo, progress?){
    this.toastr.success(cuerpo, titulo,
      {
        progressBar: progress
      }
      );
  }
  
  toastrError(cuerpo, titulo){
    this.toastr.error(cuerpo, titulo);
  }

  ngOnInit(): void {
    this._id=this.route.snapshot.params['_id'];
    this.data = [];
    this.descPoliza(); 
  }

  descPoliza(){
    this.poliza.descPoliza(this._id)
    .subscribe(data => 
    {
      this.data = data;
      this.items = this.data.items;
      console.log(this.data.items)
    })        
  }

  //Export to PDF

  downloadPDF(nroProp, tipo, company, cliente){
    //Instance of jsPDF
    const doc = new jsPDF('p', 'mm', 'letter');
    const pdf = document.getElementById('pdf');
    //Some Opts
    const options = {
      useCors: true,
      background: 'white',
      scale: 5
    };
    if (html2canvas(pdf, options).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210; 
      var pageHeight = 286;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;
      const image_compression: any = 'FAST';
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, image_compression,0);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, image_compression, 0);
        heightLeft -= pageHeight;
      }
      return doc;
    }).then((docResult) => {
      docResult.save("Prop. " + nroProp + ", " + tipo  + ", " + company + ", " + cliente+".pdf");
    })) {
      this.toastrSucces("La descarga comenzará en breve, por favor sea paciente", "Descarga Exitosa", false);
    } else {
      this.toastrError("La descarga ha presentado un error interno y no ha podido realizarce, intente dentro de un tiempo", "Error de descarga");
    }
  }
 
}
