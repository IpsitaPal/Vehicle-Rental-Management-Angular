import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer/customer.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  currentUser: User = new User('', '', '');
  customer: Customer = new Customer(0, '', '', '', '', '');

  constructor(private service: CustomerService) { 
    
  }

  setCurrentUser(user: User) {
    console.log(JSON.stringify(user));
    this.currentUser = user;
    this.service.getAllCustomersByEmail(this.currentUser.userId)
        .subscribe((response: Customer) => { console.log(JSON.stringify(response)); this.customer = response  });
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  getRole() : String {
    return this.currentUser.role;
  }

  getCurrentCustomer(): Customer {
    console.log(JSON.stringify("getcurrent" + this.customer));
    return this.customer;
  }
}
