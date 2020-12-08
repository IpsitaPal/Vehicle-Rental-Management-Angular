import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  
  getCustomerById(customerId: number): any{
    return this.httpClient.get("http://localhost:8080/ovms/customer/" + customerId);
  }
  getAllCustomersByName(firstName: string): any{
    return this.httpClient.get("http://localhost:8080/ovms/viewcustomer/" + firstName)
  }

  getAllCustomersByEmail(email: string): any{
    console.log("Hello" + JSON.stringify(email));
    return this.httpClient.get("http://localhost:8080/ovms/getcustomer/" + email)
  }

  getAllCustomers(): any{
    return this.httpClient.get("http://localhost:8080/ovms/customer/");
  }
  
  deleteCustomer(customerId :number): any{
    return this.httpClient.delete("http://localhost:8080/ovms/customer/" + customerId);
  }

  addCustomer(customer: Customer): any{
    return this.httpClient.post("http://localhost:8080/ovms/customer/", customer);
  }

  updateCustomer(customer: Customer): any{
    return this.httpClient.put("http://localhost:8080/ovms/customer/", customer);
  }

}
