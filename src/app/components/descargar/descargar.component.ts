import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PolizaService } from '../../services/poliza/poliza.service';
import { ToastrService } from 'ngx-toastr';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css'],
  providers: [PolizaService]
})
export class DescargarComponent implements OnInit {

  data:any;
  _id:any;
  propuesta = "";
  constructor(
    private route:ActivatedRoute,
    public poliza: PolizaService,
    private toastr: ToastrService)
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
    this.data = {}
    this.descPoliza();    
  }

  descPoliza(){
    this.poliza.descPoliza(this._id)
      .subscribe(data => 
      {
        this.data = data;
        console.log(data)
      })        
  }
  //Export to PDF

  downloadPDF(nroProp, tipo, company, cliente){
    //Instance of jsPDF
    const doc = new jsPDF('p', 'mm', 'letter');
    const pdf = document.getElementById('pdf');
    //Some Opts
    const options = {
      background: 'white',
      scale: 5,
      windowHeight: window.innerHeight
    };
    if (html2canvas(pdf, options).then((canvas) => {
      // const img = canvas.toDataURL('image/PNG');

      // // Add image Canvas to PDF
      // const bufferX =5;
      // const bufferY = 5;
      // const imgProps = (doc as any).getImageProperties(img);
      // const pdfWidth = doc.internal.pageSize.getWidth()-2 * bufferX;
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      // const image_compression: any = 'FAST';
      // doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, image_compression , 0);
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 0;
      const image_compression: any = 'FAST';
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
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
      this.toastrError("La descarga ha presentado un error interno y no ha podido realizarce, intente dentro de un tiempo", "Erro de descarga");
    }
  }
 
}
