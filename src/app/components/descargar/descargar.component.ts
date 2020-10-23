import { Component, OnInit } from '@angular/core';
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
    const doc = new jsPDF('p', 'px', 'a4');
    const pdf = document.getElementById('pdf');
    //Some Opts
    const options = {
      background: 'white',
      scale: 5
    };
    if (html2canvas(pdf, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX =10;
      const bufferY = 10;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() -2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const image_compression: any = 'MEDIUM';
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, image_compression , 0);
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
