import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer = new Customer(0, '', '', '', '', '');
  
  constructor(private service: CommonService, private router: Router) { 
    this.customer = this.service.customer;
  }

  ngOnInit(): void {
  }

  editCustomer() {
    this.router.navigate(['/customer/edit/' + this.customer.customerId]);
  }


}
