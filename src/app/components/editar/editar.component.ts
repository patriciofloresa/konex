import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Poliza } from 'src/app/models/poliza';
import { PolizaService } from '../../services/poliza/poliza.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [PolizaService]
})
export class EditarComponent implements OnInit {

  data:any;
  _id:any;
  polizaForm: NgForm
  constructor(
    private route:ActivatedRoute,
    public poliza: PolizaService
  ) { 

  }

  ngOnInit(): void {
    this.loadScript();
    this._id = this.route.snapshot.params['_id'];
    this.traerPoliza();
  }

  public loadScript() {
    const node = document.createElement('script');
    node.src = 'assets/js/comuna.js'; // put there your js file location
    node.type = 'text/javascript';
    node.async = true;
   document.getElementsByTagName('head')[0].appendChild(node);
  }


  traerPoliza(){
    this.poliza.getPoliza(this._id)
    .subscribe(data => 
      {
        this.data = data;
        this.load(this.data);
      }
    )
  }

  editarPoliza(form: NgForm){
    this.poliza.editPoliza(form.value)
      .subscribe(res => console.log('Propuesta Editada'));
  }

  load(poliza: Poliza){
    this.poliza.selectPoliza.nombrePropuesta = "POLIZA";
    this.poliza.selectPoliza = poliza;
  }

}
