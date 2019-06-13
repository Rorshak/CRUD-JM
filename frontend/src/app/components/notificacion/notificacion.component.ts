import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../../services/notificacion.service';
import { NgForm } from '@angular/forms';
import { Notificacion } from 'src/app/models/notificacion';
declare var M: any;
@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  constructor(private notificacionService: NotificacionService) { }

  ngOnInit() {
    this.getNotificaciones();
  }

  addNotificacion(form: NgForm){
    //Si existe, significa que hay que actualizar
    if(form.value._id){
this.notificacionService.putNotificacion(form.value)
.subscribe(res => {
  this.resetForm(form);
     
  M.toast({html:'Actualizado Satisfactoriamente'});
this.getNotificaciones(); 
})
    }
    else{
   this.notificacionService.postNotificacion(form.value)
   .subscribe(res => {
     console.log(res);
     //reiniciar el formulario
     this.resetForm(form);
     
      M.toast({html:'Guardado Satisfactoriamente'});
  this.getNotificaciones(); 
    });
  }
}  

  getNotificaciones() {
this.notificacionService.getNotificaciones()
.subscribe(res => {
  this.notificacionService.notificaciones = res as Notificacion[];
  console.log(res);
});
  }

  editNotificacion(notificacion: Notificacion){
    //envio al servidor
    this.notificacionService.selectedNotificacion = notificacion; 
    
  }
  deleteNotificacion(_id: string){
    if(confirm('Estas seguro de eliminarlo?')){
     
      this.notificacionService.deleteNotificacion(_id)
      .subscribe(res =>{
        console.log(res);
        this.getNotificaciones();
        M.toast({html: 'Eliminado Satisfactoriamente'})
      });
    }
   

  }
//Recibe el formulario como parametro y limpiara el mismo
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.notificacionService.selectedNotificacion = new Notificacion(); 
    }

  }
}
