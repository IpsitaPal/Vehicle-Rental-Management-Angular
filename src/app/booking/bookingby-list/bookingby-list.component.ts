import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { CommonService } from 'src/app/common.service';
import { Customer } from 'src/app/customer';
import { Payment } from 'src/app/payment';
import { PaymentService } from 'src/app/payment/payment.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookingby-list',
  templateUrl: './bookingby-list.component.html',
  styleUrls: ['./bookingby-list.component.css']
})
export class BookingbyListComponent implements OnInit {
  
  paymentBool: boolean = false;
  modalPayment!: Payment;
  payment!: Payment;
  payments: Payment[] = [];
  customer: Customer;
  isCustomer: boolean = true;
  bookings: Booking[] = [];
  searchByDate: any;
  searchByCustId:any;
  searchByDateErrorMessage: any;
  deleteErrorMessage:any;
  searchByCustIdErrorMessage: any;
  noDataErrorMessage: String = '';
  role: String = "";

  constructor(private bookingService: BookingService, private router: Router, 
    private service: CommonService,  private paymentService: PaymentService) { 
      this.customer = this.service.customer;
      this.role = this.service.getRole();
  }

  ngOnInit(): void {
    this.paymentService.getAllPaymentsByCustomer(this.customer.customerId).subscribe(
      (response: any[])=> {    this.payments = response;   },
      (exception: any) => {    this.noDataErrorMessage = exception.error.message;          }
  );
    this.bookingService.getBookingsByCustomer(this.customer.customerId).subscribe((response: any)=>{
      console.log("Get all by custId"+ response);
      this.bookings=response;
    },
    (exception: any) => {    this.noDataErrorMessage = exception.error.message;          })
  }

  displayAddForm(){
    this.router.navigate(['/booking/add']);
  }
  updateBookingParent(bookingId: any){
   this.router.navigate(['/booking/edit', bookingId ]);
  }

  deleteBookingParent(paymentId: any){
    this.paymentService.deletePayment(paymentId).subscribe((response: any) => {
      if(this.role == 'admin')
        this.router.navigate(['/booking']);
      if(this.role == 'customer')
        this.router.navigate(['/bookingby']);
    });
  }

  
  searchByDateForm(searchByDate: any){
    this.searchByCustId="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage="";
    this.searchByCustIdErrorMessage=""; 
    this.bookingService.getBookingsByBoookingDate(searchByDate).subscribe((response: any)=>{
      this.bookings = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.searchByDateErrorMessage = exception.error.message;
    });
  }
  

  showPaymentByParent(payment: Payment) {
    this.paymentBool = true;
    this.modalPayment = payment;
  }

  closeShowPaymentBy() {
    this.paymentBool = false;
  }

}
