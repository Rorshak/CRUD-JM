import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion as Notificacion } from '../models/notificacion';
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  //se compara con el esquema de Employee.ts
    selectedNotificacion: Notificacion;
    notificaciones: Notificacion[];
    readonly URL_API = 'http://localhost:3000/api/notificacion';
    //Comunicacion de app con el servidor
    constructor(private http: HttpClient) {
      this.selectedNotificacion = new Notificacion();
    }
  
    postNotificacion(notificacion: Notificacion) {
      return this.http.post(this.URL_API, notificacion);
    }
  
    getNotificaciones() {
      return this.http.get(this.URL_API);
    }
  
    putNotificacion(notificacion: Notificacion) {
      return this.http.put(this.URL_API +     `/${notificacion._id}`, notificacion);
    }
  
    deleteNotificacion(_id: string) {
      return this.http.delete(this.URL_API + `/${_id}`);
    }
  }
  