import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm){
    //Si existe, significa que hay que actualizar
    if(form.value._id){
this.employeeService.putEmployee(form.value)
.subscribe(res => {
  this.resetForm(form);
     
  M.toast({html:'Actualizado Satisfactoriamente'});
this.getEmployees(); 
})
    }
    else{
   this.employeeService.postEmployee(form.value)
   .subscribe(res => {
     console.log(res);
     //reiniciar el formulario
     this.resetForm(form);
     
      M.toast({html:'Guardado Satisfactoriamente'});
  this.getEmployees(); 
    });
  }
}  

  getEmployees() {
this.employeeService.getEmployees()
.subscribe(res => {
  this.employeeService.employees = res as Employee[];
  console.log(res);
});
  }

  editEmployee(employee: Employee){
    //envio al servidor
    this.employeeService.selectedEmployee = employee; 
    
  }
  deleteEmployee(_id: string){
    if(confirm('Estas seguro de eliminarlo?')){
     
      this.employeeService.deleteEmployee(_id)
      .subscribe(res =>{
        console.log(res);
        this.getEmployees();
        M.toast({html: 'Eliminado Satisfactoriamente'})
      });
    }
   

  }
//Recibe el formulario como parametro y limpiara el mismo
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee(); 
    }

  }
}
