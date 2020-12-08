import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { Payment } from 'src/app/payment';
import { PaymentService } from 'src/app/payment/payment.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: Booking[] = [];
  payments: Payment[] = [];
  payment!: Payment;
  searchByDate: any;
  searchByCustId:any;
  searchByDateErrorMessage: any;
  deleteErrorMessage:any;
  searchByCustIdErrorMessage: any;
  paymentErrorMessage: String = '';
  //searchByCustIdErrorMessage: any;
  
  constructor(private bookingService: BookingService, private router: Router,
                  private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe(
      (response: any[])=> {    this.payments = response;   },
      (exception: any) => {    this.paymentErrorMessage = exception.error.message;          }
  );
    this.bookingService.getAllBookings().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.bookings=response;
    })
  }

  displayAddForm(){
    this.router.navigate(['/booking/add']);
  }
  
  updateBookingParent(bookingId: any){	
    // this.router.navigate(['/booking-edit'], {queryParams: bookingId })	
    this.router.navigate(['/booking/edit' ,bookingId ]); 
  }
  
  deleteBookingParent(paymentId: any) {
    /*this.searchByCustId="";
    this.searchByDate="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage="";
    this.searchByCustIdErrorMessage="";
    this.bookingService.deleteBooking(bookingId).subscribe((response: any)=>{
      this.bookings = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.deleteErrorMessage = exception.error.message;
    });*/
    this.paymentService.deletePayment(paymentId).subscribe((response: any) => {
      window.location.reload();
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
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.searchByCustIdErrorMessage = exception.error.message;
    });
  }

  showPaymentParent(booking: any) {
    this.paymentService.getAllPaymentsByBooking(booking.bookingId)
        .subscribe((response: Payment) => { this.payment = response }
      );
  }

}
