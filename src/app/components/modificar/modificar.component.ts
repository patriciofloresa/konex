import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  constructor() { }

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
}
