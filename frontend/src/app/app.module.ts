import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { VentaControlComponent } from './components/venta-control/venta-control.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NotificacionComponent,
    VentaControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'employees', component: EmployeesComponent
      },
      {
        path: 'notificacion', component: NotificacionComponent
      },
      {
        path: 'venta-Control', component: VentaControlComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
