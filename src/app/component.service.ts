import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { Customer } from './customer';
import { Payment } from './payment';
import { User } from './user';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  userArray=[
    {userid:'533',password:'saikiran'}
  ];

  constructor(private httpClient: HttpClient) { }
  
  /*----------------USER----------------*/

  getAllUsers(): any {
    return this.httpClient.get<any>("http://localhost:8080/allusers");
  }

  addUser(newUser:User):any{
    this.userArray[this.userArray.length]=newUser;
    
    console.log("Hello from service" + JSON.stringify(newUser));
    return this.httpClient.post("http://localhost:8080/adduser", newUser);

  }
  
  checkLogin(email1:string,password1:string,role1:string):Observable<User>{
    console.log(email1)
    console.log(password1)
    console.log(role1);
     return this.httpClient.post<User>("http://localhost:8080/login", 
              {userId:email1,password:password1,role:role1});
  }
  

  /*----------------CUSTOMER----------------*/


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

  /*----------------VEHICLE----------------*/


  addVehicle(vehicle: Vehicle): any {
    return this.httpClient.post("http://localhost:8090/ovms/vehicle", vehicle);
  }

  deleteVehicle(id: number): any {
    return this.httpClient.delete("http://localhost:8090/ovms/vehicle/" + id);
  }

  getVehicle(): any {
    return this.httpClient.get("http://localhost:8090/ovms/vehicle");
  }

  getAllVehicle(id: number): any {
    return this.httpClient.get("http://localhost:8090/ovms/vehicle/" + id);
  }


  /*----------------BOOKING----------------*/


  getBooking(bookingId: number): any{
    return this.httpClient.get("http://localhost:8080/ovms/booking/" + bookingId);
  }
  getAllBookings(): any{
    return this.httpClient.get("http://localhost:8080/ovms/bookings");
  }
 
  deleteBooking(bookingId :number): any{
    return this.httpClient.delete("http://localhost:8080/ovms/booking/" + bookingId);
  }

  addBooking(booking: Booking): any{
    return this.httpClient.post("http://localhost:8080/ovms/booking/", booking);
  }

  updateBooking(booking: Booking): any{
    return this.httpClient.put("http://localhost:8080/ovms/booking/", booking);
  }

  getBookingsByCustomer(customerId: number):any{
    return this.httpClient.get("http://localhost:8080/ovms/bookingsby/" + customerId);
  }

  getBookingsByBoookingDate(bookingDate: Date): any{
    return this.httpClient.get("http://localhost:8080/ovms/bookings/" + bookingDate);
  }

  
  /*----------------PAYMENT----------------*/


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
}
