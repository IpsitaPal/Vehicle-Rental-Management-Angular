import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: Booking[] = [];
  searchByDate: any;
  searchByCustId:any;
  searchByDateErrorMessage: any;
  deleteErrorMessage:any;
  searchByCustIdErrorMessage: any;
  //searchByCustIdErrorMessage: any;
  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    
    this.bookingService.getAllBookings().subscribe((response: any)=>{
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

  
  displayViewAllForm(){
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

}
