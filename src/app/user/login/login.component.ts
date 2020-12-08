import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/component.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:any;
  password:any;
  role:any;
  user1:any;
  
  constructor(private userService:ComponentService, private router:Router) {
  
   }

  ngOnInit(): void {
  }
  submitLoginForm(form:any){
     console.log(this.userid);
     console.log(this.password);
     console.log(this.role);
    this.userService.checkLogin(this.userid,this.password,this.role)
    .subscribe(
      data=>{
      if (data != null) {
    
      this.user1=data;console.log(data)
      if(this.user1.role=="customer"){
        alert(" Customer Logged in");
        this.router.navigate(["/home"]) //customer page
      }
      else if(this.user1.role=="admin"){
        localStorage.setItem("currentUser",this.user1);
        alert(" Admin Logged in");
        this.router.navigate(["/admin"])
      }

    
    }
    else{
      alert("invalid credentials");
    }



})
  }
}