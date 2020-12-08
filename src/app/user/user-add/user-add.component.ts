import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/component.service';

import { User } from '../../user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userid:string='533';
  password:string='saikiran9';
  role:string='customer';
  newUser:any;
  user:User;
 
  constructor(private userService:ComponentService,private router:Router) {
    this.user=new User('','','');
   }

  ngOnInit(): void {
  }
  // submitAddForm(){
  //   this.newUser=new User(this.userid,this.password,this.role);
  //   this.userService.addUser(this.newUser);
  //   this.router.navigate(['/user']);
  // }
  submitAddForm(){
    this.userService.addUser(this.user).subscribe((response: any) => {
      console.log("Hello from add component" + JSON.stringify(this.user));
      this.router.navigate(['/home']);
    })
  }

}
