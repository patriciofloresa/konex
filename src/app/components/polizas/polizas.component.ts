import { Component, OnInit, ɵConsole } from '@angular/core';
import { Poliza } from 'src/app/models/poliza';
import { PolizaService } from '../../services/poliza/poliza.service';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css'],
  providers: [PolizaService]
})
export class PolizasComponent implements OnInit {

  constructor(public polizaService: PolizaService) { }

  ngOnInit(): void {
    this.getPolizas();
  }

  getPolizas()
  {
    this.polizaService.getPolizas()
      .subscribe(res => {
        this.polizaService.poliza = res as Poliza[];
        console.log(res);
      })
  };
  
  enviada(poliza : Poliza){
    console.log(poliza)
    console.log(this.polizaService.poliza)
    this.polizaService.enviada(poliza).subscribe(res => {poliza})
    this.getPolizas();
  }
}
  