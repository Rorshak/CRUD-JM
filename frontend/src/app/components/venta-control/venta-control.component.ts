import { Component, OnInit } from '@angular/core';
import { VentaControlService } from '../../services/venta-control.service';
import { NgForm } from '@angular/forms';
import { VentaControl } from 'src/app/models/venta-control';
import * as moment from 'moment';


declare var M: any;

@Component({
  selector: 'app-venta-control',
  templateUrl: './venta-control.component.html',
  styleUrls: ['./venta-control.component.css']
})
export class VentaControlComponent implements OnInit {

  constructor(private ventaControlService: VentaControlService) { }

  ngOnInit() {
    this.getVentaControls();
  }
  addVentaControl(form: NgForm){
    //Si existe, significa que hay que actualizar
    if(form.value._id){
this.ventaControlService.putVentaControl(form.value)
.subscribe(res => {
  this.resetForm(form);
     
  M.toast({html:'Actualizado Satisfactoriamente'});
this.getVentaControls(); 
})
    }
    else{
   this.ventaControlService.postVentaControl(form.value)
   .subscribe(res => {
     console.log(res);
     //reiniciar el formulario
     this.resetForm(form);
     
      M.toast({html:'Guardado Satisfactoriamente'});
  this.getVentaControls(); 
    });
  }
}  

  getVentaControls() {
this.ventaControlService.getVentaControls()
.subscribe(res => {
  this.ventaControlService.ventaControls = res as VentaControl[];
 // var m = moment(VentaControl[0][1], 'YYYY-MM-DD');
  //console.log('hOLA'+m.format('L'));
  console.log(res);
});
  }

  editVentaControl(ventaControl: VentaControl){
    //envio al servidor
    this.ventaControlService.selectedVentaControl = ventaControl; 
    
  }
  deleteVentaControl(_id: string){
    if(confirm('Estas seguro de eliminarlo?')){
     
      this.ventaControlService.deleteVentaControl(_id)
      .subscribe(res =>{
        console.log(res);
        this.getVentaControls();
        M.toast({html: 'Eliminado Satisfactoriamente'})
      });
    }
   

  }
//Recibe el formulario como parametro y limpiara el mismo
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.ventaControlService.selectedVentaControl = new VentaControl(); 
    }

  }
}
