import { Component, OnInit,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Customer } from 'src/app/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  
  customer: Customer = new Customer(0, '', '', '', '', '');

  constructor(private formBuilder: FormBuilder, private router: Router, 
      private http: HttpClient, private _service: CustomerService) { }

  ngOnInit() {
    
  }
  addCustomer() {
    console.log(JSON.stringify(this.customer));
    this._service.addCustomer(this.customer).subscribe(
      (_data: any) => {
        console.log("respose received")
      }
    );
  }

  
  }




