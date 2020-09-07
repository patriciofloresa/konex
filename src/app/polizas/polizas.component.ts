import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {

  dated = Date.now();

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.dated)

  }

}
