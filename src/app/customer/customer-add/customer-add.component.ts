import { Component, OnInit,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Customer } from 'src/app/customer';
import { CustomerService } from '../customer.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  
  customer: Customer = new Customer(0, '', '', '', '', '');
  user: User = new User('', '', 'customer');
  formValidErrorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private router: Router, 
      private http: HttpClient, private _service: CustomerService , private userService: UserService) { }

  ngOnInit() {
    
  }
  addCustomer() {
    console.log(JSON.stringify(this.customer));
    this._service.addCustomer(this.customer).subscribe(
      (_data: any) => {
        console.log("respose received")
        this.router.navigate(['/home']);
      },
      (exception: any)=>{
        console.log(JSON.stringify(exception + "123456789 -" + exception.error.status));
        if(exception.error.status == 500)
          this.formValidErrorMessage = "Email Already Exists."
      }
    );
    this.user.userId = this.customer.emailId;
    this.userService.addUser(this.user).subscribe((response: any) => {
      console.log("Hello from add component" + JSON.stringify(this.user));
      this.router.navigate(['/home']);
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.formValidErrorMessage = exception.error.message;
    });
  }
  
}




