import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { User } from 'src/app/user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:any;
  password:any;
  role:any;
  user!: User; 
  
  constructor(private userService:UserService, private router:Router, private service: CommonService) {
  
   }

  ngOnInit(): void {
  }
  
  submitLoginForm(form:any) {
    this.user =new User(this.userid, this.password, "anonymous");
    console.log(JSON.stringify(this.user));
    this.userService.checkLogin(this.user)
    .subscribe(  data=>{
            console.log(JSON.stringify(data));
            if (data != null) {

                    //this.user={userId:this.userid,password:this.password,role:'admin'};
                    this.service.setCurrentUser(data);
                    
                    this.router.navigate(["/home"]);
                  }
              });
  }
}

     /*console.log(data)
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

*/

