import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  searchByCustId:any;
  deleteErrorMessage:any;
  searchByCustIdErrorMessage: any;
  bookings: any;
 
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    
    this.customerService.getAllCustomers().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.customers=response;
    })
  }
/*
  deleteCustomerParent(customerId: any){
    this.searchByCustId="";
   
    this.deleteErrorMessage="";
    
    this.searchByCustIdErrorMessage="";
    this.customerService.deleteCustomer(0).subscribe((response: any)=>{
      this.customers = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.deleteErrorMessage = exception.error.message;
    });
  }

  displayViewAllForm(){
    
    this.searchByCustId="";
    this.deleteErrorMessage="";
   
    this.searchByCustIdErrorMessage="";
    this.customerService.getAllCustomers('').subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.customers=response;
    })
  }

  searchByCustIdForm(searchByCustId: any){
    
    this.deleteErrorMessage="";
    this.searchByCustIdErrorMessage="";
    this.customerService.getCustomer(searchByCustId).subscribe((response: any)=>{
      this.customers = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.searchByCustIdErrorMessage = exception.error.message;
    });
  }
*/
}