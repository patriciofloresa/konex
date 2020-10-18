import { Component, OnInit } from '@angular/core';
import { Poliza } from 'src/app/models/poliza';
import { PolizaService } from '../../services/poliza/poliza.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { DescargarComponent } from '../descargar/descargar.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css'],
  providers: [PolizaService]
})
export class PolizasComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public polizaService: PolizaService,private router:Router, private route:ActivatedRoute )
  {  }

  ngOnInit(): void {
    this.polizaService.poliza = [];
    this.getPolizas();
    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        'colvis',
        'excel',        
      ] 
    };
  }
  
  getPolizas()
  {
    this.polizaService.getPolizas()
      .subscribe(res => {
        this.polizaService.poliza = res as Poliza[];
        console.log(res);
        this.dtTrigger.next();
      })
  };
}
  