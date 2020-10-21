import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Todavía no lo usamos

import { PolizaService } from '../../services/poliza/poliza.service';

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
    public poliza: PolizaService)
  {

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
      },
      err => {
        console.log(err)
      }
    )
  }


  //Export to PDF
  
  downloadPDF(nroProp, company, cliente){
    //Instance of jsPDF
    const doc = new jsPDF('p', 'pt', 'a4');
    const pdf = document.getElementById('pdf');
    //Some Opts
    const options = {
      background: 'white',
      scale: 5
    };
    html2canvas(pdf, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 20;
      const bufferY = 20;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const alias = "propuesta " + nroProp + " " + company + " " + cliente+".pdf";
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined);
      return doc;
    }).then((docResult) => {
      docResult.save("propuesta " + nroProp + " " + company + " " + cliente+".pdf");
    });
  }
  
  // onExportClick(nroProp, company, cliente){
  //       
  //   const options = {
  //     filename: "propuesta " + nroProp + " " + company + " " + cliente+".pdf" ,
  //     image: {type: 'jpeg', quality:  5},
  //     html2canvas: { scale: 5,
  //     letterRendering: true,
  //     width: Width,
  //     height: Height},
  //     jsPDF: { 
  //       unit: "px",
  //       orientation: "p",
  //       //format: [height, width]
  //       format: [Height, Width]
  //      },
  //   };
  //   html2pdf()
  //     .from(content)
  //     .set(options)
  //     .save();

  // }

 
}
