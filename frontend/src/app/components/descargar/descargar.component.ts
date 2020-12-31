import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PolizaService } from '../../services/poliza/poliza.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css'],
  providers: [PolizaService]
})
export class DescargarComponent implements OnInit {

  data:any;
  _id:any;
  images: any;
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
    this.data = [];
    this.descPoliza(); 
  }

  descPoliza(){
    this.poliza.descPoliza(this._id)
    .subscribe(data => 
    {
      this.data = data;
      const toDataURL = url => fetch(this.data.items)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
        }))
        toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
        .then(dataUrl => {
        console.log('RESULT:', dataUrl)
        this.data.items = dataUrl;
        console.log(this.data.items)
      })
    })        
  }

  // toDataURL(url, callback) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = function() {
  //     var reader = new FileReader();
  //     reader.onloadend = function() {
  //       callback(reader.result);
  //     }
  //     reader.readAsDataURL(xhr.response);
  //   };
  //   xhr.open('GET', url);
  //   xhr.responseType = 'blob';
  //   xhr.send();
  // }
  //Export to PDF

  downloadPDF(nroProp, tipo, company, cliente){
    //Instance of jsPDF
    const doc = new jsPDF('p', 'mm', 'letter');
    const pdf = document.getElementById('pdf');
    //Some Opts
    const options = {
      useCors: true,
      background: 'white',
      scale: 2
    };
    if (html2canvas(pdf, options).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var imgWidth = 210; 
      var pageHeight = 298;  
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
      this.toastrError("La descarga ha presentado un error interno y no ha podido realizarce, intente dentro de un tiempo", "Erro de descarga");
    }
  }
 
}
