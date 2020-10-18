import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivatedRoute } from "@angular/router";
//Addons
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {DatePipe} from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DataTablesModule } from 'angular-datatables';

//routes
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { AgregarComponent } from './components/agregar/agregar.component';

//Services
import { PolizaService } from './services/poliza/poliza.service';
import { DescargarComponent } from './components/descargar/descargar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes : Routes = [
  { path: '', component: PolizasComponent},
  { path: 'polizas/agregar', component: AgregarComponent },  
  { path: 'polizas/editar/:_id', component: EditarComponent},
  { path: 'polizas/descargar/:_id', component: DescargarComponent},
]

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PolizasComponent,
    AgregarComponent,
    DescargarComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'}),
    AutocompleteLibModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    DataTablesModule 
  ],
  exports:[RouterModule],
  providers: [ 
    DatePipe,
    PolizaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(private route: ActivatedRoute) { }
}
