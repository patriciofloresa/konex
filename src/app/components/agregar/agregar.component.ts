import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PolizaService } from '../../services/poliza/poliza.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  dated = Date.now();
  showCob:boolean = true

  constructor(public poliza: PolizaService) { }

  public loadScript() {
    const node = document.createElement('script');
    node.src = 'assets/js/comuna.js'; // put there your js file location
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
   document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.loadScript();
  }
  
  addPoliza(form: NgForm){
    this.poliza.postPoliza(form.value)
      .subscribe(res => console.log(res))
  }

}
