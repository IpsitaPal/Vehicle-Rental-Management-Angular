import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userArray!:any[];
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response: any[])=>{
           console.log("Hello from emp list" + JSON.stringify(response));
         this.userArray = response;
       });
  }
  // ngOnInit(): void {
  //   this.employeeService.getAllEmployees().subscribe((response: any[])=>{
  //     console.log("Hello from emp list" + JSON.stringify(response));
  //     this.allEmployees = response;
  //   });
  // }
  // displayAddForm(){
  //   this.router.navigate(['/user-add']);
  // }
  addUser() {
    this.router.navigate(['/user']);  
  }



}
