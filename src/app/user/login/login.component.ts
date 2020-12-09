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
  showErrorMessage: any;
  constructor(private userService:UserService, private router:Router, private service: CommonService) {
  
   }

  ngOnInit(): void {
  }
  
  submitLoginForm(form:any) {
    this.user =new User(this.userid, this.password, "anonymous");
    this.userService.checkLogin(this.user)
      .subscribe((data: any) =>
                        {
                          if (data != null) {
                              this.service.setCurrentUser(data);
                              this.router.navigate(["/home"]);
                          }
                        },
                  (error: any) => 
                        {
                          this.showErrorMessage = true;
                          console.log("ErrorOccured: "+this.showErrorMessage)
                          alert("Invalid Credentials")
                        }
              );
  }
}


