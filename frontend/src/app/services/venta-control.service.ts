import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentaControl } from '../models/venta-control';

@Injectable({
  providedIn: 'root'
})
export class VentaControlService {

  selectedVentaControl: VentaControl;
  ventaControls: VentaControl[];
  readonly URL_API = 'http://localhost:3000/api/venta-control';
  //Comunicacion de app con el servidor
  constructor(private http: HttpClient) {
    this.selectedVentaControl = new VentaControl();
  }

  postVentaControl(ventaControl: VentaControl) {
    return this.http.post(this.URL_API, ventaControl);
  }

  getVentaControls() {
    return this.http.get(this.URL_API);
  }

  putVentaControl(ventaControl: VentaControl) {
    return this.http.put(this.URL_API +     `/${ventaControl._id}`, ventaControl);
  }

  deleteVentaControl(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
