import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookingby-list',
  templateUrl: './bookingby-list.component.html',
  styleUrls: ['./bookingby-list.component.css']
})
export class BookingbyListComponent implements OnInit {
  
  bookings: Booking[] = [];
  searchByDate: any;
  searchByCustId:any;
  searchByDateErrorMessage: any;
  deleteErrorMessage:any;
  searchByCustIdErrorMessage: any;
  constructor(private bookingService: BookingService, private router: Router) { }
  customerId: number = 102;

  isCustomer: boolean = true;

  ngOnInit(): void {
    this.bookingService.getBookingsByCustomer(this.customerId).subscribe((response: any)=>{
      console.log("Get all by custId"+ response);
      this.bookings=response;
    })
  }

  displayAddForm(){
    // re router check..
    this.router.navigate(['/booking-add']);
  }
  updateBookingParent(bookingId: any){
    // re router check...
   // this.router.navigate(['/booking-edit'], {queryParams: bookingId })
   this.router.navigate(['/booking-edit' ,bookingId ]);
  }

  deleteBookingParent(bookingId: any){
    this.searchByCustId="";
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
  

}
