import { Component, OnInit } from '@angular/core';
import { SellControlService } from '../../services/sell-control.service';
import { NgForm } from '@angular/forms';
import { SellControl } from 'src/app/models/sell-control';


declare var M: any;

@Component({
  selector: 'app-sell-control',
  templateUrl: './sell-control.component.html',
  styleUrls: ['./sell-control.component.css']
})
export class SellControlComponent implements OnInit {

  constructor(private sellControlService: SellControlService) { }

  ngOnInit() {
    this.getSellControls();
  }
  addSellControl(form: NgForm){
    //Si existe, significa que hay que actualizar
    if(form.value._id){
this.sellControlService.putSellControl(form.value)
.subscribe(res => {
  this.resetForm(form);
     
  M.toast({html:'Actualizado Satisfactoriamente'});
this.getSellControls(); 
})
    }
    else{
   this.sellControlService.postSellControl(form.value)
   .subscribe(res => {
     console.log(res);
     //reiniciar el formulario
     this.resetForm(form);
     
      M.toast({html:'Guardado Satisfactoriamente'});
  this.getSellControls(); 
    });
  }
}  

  getSellControls() {
this.sellControlService.getSellControls()
.subscribe(res => {
  this.sellControlService.sellControls = res as SellControl[];
 // var m = moment(VentaControl[0][1], 'YYYY-MM-DD');
  //console.log('hOLA'+m.format('L'));
  console.log(res);
});
  }

  editSellControl(sellControl: SellControl){
    //envio al servidor
    this.sellControlService.selectedSellControl = sellControl; 
    
  }
  deleteSellControl(_id: string){
    if(confirm('Estas seguro de eliminarlo?')){
     
      this.sellControlService.deleteSellControl(_id)
      .subscribe(res =>{
        console.log(res);
        this.getSellControls();
        M.toast({html: 'Eliminado Satisfactoriamente'})
      });
    }
   

  }
//Recibe el formulario como parametro y limpiara el mismo
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.sellControlService.selectedSellControl = new SellControl(); 
    }

  }
}
