import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PolizaService } from '../../services/poliza/poliza.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
  providers: [PolizaService]
})

export class AgregarComponent implements OnInit {

  constructor(public poliza: PolizaService) { }

  public loadScript() {
    const node = document.createElement('script');
    node.src = 'assets/js/comuna.js'; // put there your js file location
    node.type = 'text/javascript';
    node.async = true;
   document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.loadScript();
  }

  createPoliza(form: NgForm){
    console.log(form.value)
    this.poliza.createPoliza(form.value)
      .subscribe(res => console.log('Propuesta Añadida'));
  }

}
