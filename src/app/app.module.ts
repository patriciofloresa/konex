import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Addons
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {DatePipe} from '@angular/common';
//routes
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AfiliadosComponent } from './components/afiliados/afiliados.component';
import { RamosComponent } from './components/ramos/ramos.component';
import { PolizasComponent } from './components/polizas/polizas.component';
import { AgregarComponent } from './components/agregar/agregar.component';

//Services
import { ModificarComponent } from './components/modificar/modificar.component';
import { PolizaService } from './services/poliza/poliza.service';

const routes : Routes = [
  { path: '', component: PolizasComponent},
  { path: 'polizas/agregar', component: AgregarComponent },
  { path: 'ramos', component: RamosComponent},
  { path: 'afiliados', component: AfiliadosComponent},
  { path: 'polizas/modificar', component: ModificarComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PolizasComponent,
    AgregarComponent,
    AfiliadosComponent,
    RamosComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AutocompleteLibModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    DatePipe,
    PolizaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
