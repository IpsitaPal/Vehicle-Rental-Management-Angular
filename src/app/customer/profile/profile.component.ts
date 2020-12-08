import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer = new Customer(0, '', '', '', '', '');
  
  constructor(private service: CommonService) { 
    console.log(JSON.stringify(this.customer));
    this.customer = this.service.customer;
    console.log(JSON.stringify("after" + this.customer));
  }

  ngOnInit(): void {
  }



}
