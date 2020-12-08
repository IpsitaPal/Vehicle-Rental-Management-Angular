import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { ComponentService } from 'src/app/component.service';
import { Payment } from 'src/app/payment';

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
  
  constructor(private service: ComponentService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllPayments().subscribe(
      (response: any[])=> {    this.payments = response;   },
      (exception: any) => {    this.paymentErrorMessage = exception.error.message;          }
  );
    this.service.getAllBookings().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.bookings=response;
    })
  }

  displayAddForm(){
    this.router.navigate(['/booking-add']);
  }
  updateBookingParent(booking: any){
    this.router.navigate(['/booking-edit'], {queryParams: booking })
  }

  deleteBookingParent(bookingId: any){
    this.searchByCustId="";
    this.searchByDate="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage="";
    this.searchByCustIdErrorMessage="";
    this.service.deleteBooking(bookingId).subscribe((response: any)=>{
      this.bookings = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.deleteErrorMessage = exception.error.message;
    });
  }

  searchByDateForm(searchByDate: any){
    this.searchByCustId="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage="";
    this.searchByCustIdErrorMessage=""; 
    this.service.getBookingsByBoookingDate(searchByDate).subscribe((response: any)=>{
      this.bookings = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.searchByDateErrorMessage = exception.error.message;
    });
  }

  
  displayViewAllForm(){
    this.searchByDate="";
    this.searchByCustId="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage="";
    this.searchByCustIdErrorMessage="";
    this.service.getAllBookings().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.bookings=response;
    })
  }

  searchByCustIdForm(searchByCustId: any){
    this.searchByDate="";
    this.deleteErrorMessage="";
    this.searchByDateErrorMessage=""; 
    this.searchByCustIdErrorMessage="";
    this.service.getBookingsByCustomer(searchByCustId).subscribe((response: any)=>{
      this.bookings = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.searchByCustIdErrorMessage = exception.error.message;
    });
  }

  showPaymentParent(booking: any) {
    this.service.getAllPaymentsByBooking(booking.bookingId)
        .subscribe((response: Payment) => { this.payment = response }
      );
  }

}
