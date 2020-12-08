import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer = new Customer(0, '', '', '', '', '');
  updatedCustomer: Customer =new Customer(0,'','', '','','');

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  submitEditForm(){
    this.customerService.updateCustomer(this.updatedCustomer).subscribe((response: any)=>{ });
  }

}
