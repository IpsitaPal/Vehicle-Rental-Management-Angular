import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/component.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer = new Customer(0, '', '', '', '', '');
  updatedCustomer: Customer =new Customer(0,'','', '','','');

  constructor(private customerService: ComponentService) { }

  ngOnInit(): void {
  }

  submitEditForm(){
    this.customerService.updateCustomer(this.updatedCustomer).subscribe((response: any)=>{ });
  }

}
