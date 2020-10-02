import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route:ActivatedRoute,
    public poliza: PolizaService
  ) { 

  }

  ngOnInit(): void {
    this.loadScript();
    this._id = this.route.snapshot.params['_id'];
    console.log(this._id);
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
        console.log(data)
      }
    )
  }

  editarPoliza(form: NgForm){
    this.poliza.selectPoliza.nombrePropuesta = "POLIZA";
    console.log(form.value)
    this.poliza.editPoliza(form.value)
      .subscribe(res => console.log('Propuesta Editada'));
  }
}
