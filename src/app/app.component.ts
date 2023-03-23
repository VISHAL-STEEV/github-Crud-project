import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  public userid = "";
  public pass = "";
  public err ="";
  

 
 constructor(private rout:Router){}
  ngOnInit(){}


    LoginUser(){
      if (this. userid== "Admin" && this.pass== "pass123"){
        this.rout.navigate(['contact-us'])
      }else {
        this.err= "invalid user id"
      }
       
          }


}
