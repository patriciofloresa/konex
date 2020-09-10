import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Addons
import { HttpClientModule } from '@angular/common/http'

//routes
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { RamosComponent } from './ramos/ramos.component';
import { PolizasComponent } from './polizas/polizas.component';
import { AgregarComponent } from './agregar/agregar.component';

//Services
import { AdpolizasService } from './adpolizas.service';
import { ModificarComponent } from './modificar/modificar.component';

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
    HttpClientModule
  ],
  providers: [ AdpolizasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
