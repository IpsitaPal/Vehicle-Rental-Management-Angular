import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
 
  originalCustomer: Customer = new Customer(0, '', '', '', '', '');
  updatedCustomer: Customer =new Customer(0,'','','','','');  
  customerId: any;
  formValidErrorMessage: String = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
      private customerService: CustomerService) { }

  ngOnInit(): void {
  
    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId');

    this.customerService.getCustomerById(this.customerId).subscribe((response: any)=>{
      console.log("Get customer"+ response);
      this.originalCustomer = response;
      this.updatedCustomer = response
    })
  }

  editCustomerId(editCustomerId: any) {
    throw new Error('Method not implemented.');
  }

  submitEditForm(){
    this.customerService.updateCustomer(this.updatedCustomer).subscribe((response: any)=>{   
      this.router.navigate(['/profile']);
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.formValidErrorMessage = exception.error.Errors;
    });
  }
}

