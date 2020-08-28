import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PolizasComponent } from './polizas/polizas.component';
import { AseguradosComponent } from './asegurados/asegurados.component';

const routes : Routes = [
  { path: '', component: PolizasComponent},
  //{ path: '**',redirectTo:'polizas', pathMatch: 'full'},
  { path: 'polizas', component: PolizasComponent },
  { path: 'asegurados', component: AseguradosComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PolizasComponent,
    AseguradosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
