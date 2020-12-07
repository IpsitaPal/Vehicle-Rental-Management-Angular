import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomer(customerId: number): any{
    return this.httpClient.get("http://localhost:8080/ovms/booking/" + customerId);
  }
  getAllCustomers(firstName: string): any{
    return this.httpClient.get("http://localhost:8080/ovms/viewcustomer/" +firstName)
  }
  
  deleteCustomer(customerId :number): any{
    return this.httpClient.delete("http://localhost:8080/ovms/customer/" + customerId);
  }

  addCustomer(customer: Customer): any{
    return this.httpClient.post("http://localhost:8080/ovms/customer/", customer);
  }

  updateCustomer(customer: Customer): any{
    return this.httpClient.put("http://localhost:8080/ovms/booking/", customer);
  }

}
