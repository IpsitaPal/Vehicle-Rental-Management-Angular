import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { Customer } from 'src/app/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer = new Customer(0, '', '', '', '', '');
  
  constructor(private service: CommonService, private router: Router, private customerService: CustomerService) { 
    this.customer = this.service.customer;
  }

  ngOnInit(): void {
    this.customerService.getCustomerById(this.customer.customerId).subscribe((response: any)=>{
      this.customer = response;
    })
  }

  editCustomer() {
    this.router.navigate(['/customer/edit/' + this.customer.customerId]);
  }


}
