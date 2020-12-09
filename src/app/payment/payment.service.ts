import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  addPayment(payment: Payment): any {
    return this.httpClient.post("http://localhost:8080/ovms/payment", payment);
  }
  
  editPayment(payment: Payment): any {
    return this.httpClient.put("http://localhost:8080/ovms/payment", payment);
  }

  deletePayment(id: number): any {
    return this.httpClient.delete("http://localhost:8080/ovms/payment/" + id);
  }

  getAllPayments(): any { 
    return this.httpClient.get("http://localhost:8080/ovms/payment");
  }

  getAllPaymentsByBooking(id: number): any {
    return this.httpClient.get("http://localhost:8080/ovms/payment/booking/" + id);
  }

  getAllPaymentsByCustomer(id: number): any {
    return this.httpClient.get("http://localhost:8080/ovms/payment/customer/" + id);
  }

  getMonthlyRevenue(fromDate: Date, tillDate: Date): any {
    return this.httpClient.get("http://localhost:8080/ovms/payment/" + fromDate + "/" + tillDate);
  }

  getTotalRevenue() : any {
    return this.httpClient.get("http://localhost:8080/ovms/payment/revenue");
  }
}
