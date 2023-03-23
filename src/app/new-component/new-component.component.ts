import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';import { SevicecoService } from '../service/seviceco.service';
import { employeemodel } from './employee-new com';
 '@angular/forms'

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit{


  formValue !: FormGroup;
 constructor(private FormBuilder : FormBuilder, private service : SevicecoService ){} 

 employeemodelObj :employeemodel =new employeemodel()
 employeeData !: any;
 showAdd !: boolean;
 showUpdate !:boolean;


 ngOnInit(): void {
  this.formValue = this.FormBuilder.group({
      
    Firstname :[''],
    Lastname :[''],
    emailhtml :[''],
    MobileNo :[''],
    salary :['']

  })
  
  this.getEmployeeDetails();

  

 }




 postEmployeeDetails(){
  this.employeemodelObj.firstname=this.formValue.value.Firstname;
  this.employeemodelObj.lastname=this.formValue.value.Lastname;
  this.employeemodelObj. email =this.formValue.value.emailhtml;
  this.employeemodelObj.mobile=this.formValue.value.MobileNo;
  this.employeemodelObj.salary=this.formValue.value.salary;



  this.service.postemp(this.employeemodelObj)
  .subscribe(res=>{
    
    alert("Employee added successfull")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getEmployeeDetails();
    
  },err=>{
    alert("somthing went wrong")
  })
 }



 getEmployeeDetails(){
  this.service.getemp().subscribe(res=>{
  this.employeeData = res;
  })
 }

 deleteEmployeeDetails(row :any){
    this.service.deletemp(row.id).subscribe(res=>{
      alert("Employee details delated");
      this.getEmployeeDetails();
      
    })
  
 }


   onEdit(row : any){

    this.showAdd=false;
    this.showUpdate=true;

      this.employeemodelObj.id =row.id
       this.formValue.controls['Firstname'].setValue(row.firstname);
       this.formValue.controls['Lastname'].setValue(row.lastname);
       this.formValue.controls['emailhtml'].setValue(row.email);
       this.formValue.controls['MobileNo'].setValue(row.mobile);
       this.formValue.controls['salary'].setValue(row.salary);
   }


   UpdateEmployeeDetails(){


    this.employeemodelObj.firstname=this.formValue.value.Firstname;
  this.employeemodelObj.lastname=this.formValue.value.Lastname;
  this.employeemodelObj. email =this.formValue.value.emailhtml;
  this.employeemodelObj.mobile=this.formValue.value.MobileNo;
  this.employeemodelObj.salary=this.formValue.value.salary;

  this.service.upemp(this.employeemodelObj,this.employeemodelObj.id)
  .subscribe(res=>{
    alert("updated successfully");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getEmployeeDetails();
  })
    

   }




   clickaddEmp(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
   }

}
 