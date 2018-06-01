import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SalaComponent } from './components/sala/sala.component';
import { RouterModule, Routes } from '@angular/router';

import { ApiService } from './services/api.service'
import { AdminComponent } from './components/admin/admin.component';

const rutas: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'home', component: SalaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SalaComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
