import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { CommonService } from 'src/app/common.service';
import { Payment } from 'src/app/payment';
import { PaymentService } from 'src/app/payment/payment.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  role: String = ''
  bookings: Booking[] = [];
  payments: Payment[] = [];
  payment!: Payment;
  modalPayment!: Payment;
  searchByDate: any;
  searchByCustId:any;
  searchByDateErrorMessage: any;
  deleteErrorMessage:any;
  searchByCustIdErrorMessage: any;
  paymentErrorMessage: String = '';
  errorMessage: String = '';
  //searchByCustIdErrorMessage: any;
  vehicleId: any;
  paymentBool: boolean = false;

  constructor(private bookingService: BookingService, private router: Router,
                  private paymentService: PaymentService, private service: CommonService) { 
                    this.role = this.service.getRole();
  }

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe(
      (response: any[])=> {    this.payments = response;   },
      (exception: any) => {    this.paymentErrorMessage = exception.error.message;          }
  );
    this.bookingService.getAllBookings().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.bookings=response;
    },
    (exception: any) => {    this.errorMessage = exception.error.message;          })
  }

  displayAddForm(){
    this.router.navigate(['/booking/add', this.vehicleId]);
  }
  
  updateBookingParent(bookingId: any){	
    // this.router.navigate(['/booking-edit'], {queryParams: bookingId })	
    this.router.navigate(['/booking/edit' ,bookingId ]); 
  }
  
  deleteBookingParent(paymentId: any) {
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

  
  displayViewAll(){
    this.searchByDate="";
    this.searchByCustId="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage="";
    this.searchByCustIdErrorMessage="";
    this.bookingService.getAllBookings().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.bookings=response;
    })
  }

  searchByCustIdForm(searchByCustId: any){
    this.searchByDate="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage=""; 
    this.searchByCustIdErrorMessage="";
    this.bookingService.getBookingsByCustomer(searchByCustId).subscribe((response: any)=>{
      this.bookings = response;
      //this.router.navigate(['/booking']); 
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.searchByCustIdErrorMessage = exception.error.message;
    });
  }

  showPaymentParent(payment: Payment) {
    this.paymentBool = true;
    this.modalPayment = payment;
  }

  closeShowPayment() {
    this.paymentBool = false;
  }

}
