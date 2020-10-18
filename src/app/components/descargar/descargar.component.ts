import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as html2pdf from 'html2pdf-fix-jspdf';

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

  constructor(
    private route:ActivatedRoute,
    public poliza: PolizaService)
  {

  }

  ngOnInit(): void {
    this._id=this.route.snapshot.params['_id'];
    this.data = { 
      nombrePropuesta: '-'
    }
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
  onExportClick(){
    const content: Element = document.getElementById('poliza')
    var Width = document.getElementById('poliza').offsetWidth;
    var Height = document.getElementById('poliza').offsetHeight;
    console.log(Width + ' wid', Height + ' hei')
    
    const options = {
      filename: 'poliza.pdf',
      image: {type: 'jpeg', quality:  5},
      html2canvas: { scale: 3,
      letterRendering: true,
      width: Width,
      height: Height},
      jsPDF: { 
        unit: "px",
        orientation: "l",
        //format: [height, width]
        format: [Height, Width]
       },
    };
    html2pdf()
      .from(content)
      .set(options)
      .save();

  }

 
}
