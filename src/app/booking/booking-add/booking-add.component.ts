import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { Customer } from 'src/app/customer';
import { Driver } from 'src/app/driver';
import { Vehicle } from 'src/app/vehicle';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {
  //bookingForm:any;
  isCustomer: boolean = true;

  vehicleErrorMessage: any;
  formValidErrorMessage:any;
  driverNew: Driver = {driverId: 0, firstName: '', lastName: '', contactNumber: '',
    email: '', address: '', chargesPerDay: 0, licenseNo: ''}
  customerNew: Customer = {customerId: 0, firstName: '', lastName: '', mobileNumber: '',
      emailId: '',  address: ''}
  vehicleNew: Vehicle = {vehicleId: 0, vehicleNumber: '', type: '', category: '', description: '',
    location: '', capacity: '', chargesPerKM: 0, fixedCharges: 0, driver: this.driverNew }
  booking: Booking ={bookingId: 0, bookingDate: new Date(Date.now()), bookedTillDate: new Date(Date.now()), bookingDescription: " ", 
    totalCost: 0,distance: 0, customer: this.customerNew, vehicle: this.vehicleNew}
   // booking: any='';
  constructor(private bookingService: BookingService, private router: Router ) { }

  ngOnInit(): void {
  }

  // later route it to payment
  submitAddForm(bookingForm:any){
    this.vehicleErrorMessage ='';
    console.log(JSON.stringify(this.booking))
    this.bookingService.addBooking(this.booking).subscribe((response: any)=>{
      console.log(response);
      if(this.isCustomer){
      this.router.navigate(['/booking']);
      }
      else{
        this.router.navigate(['/bookingby/101']);
      }
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.formValidErrorMessage = exception.error.Errors;
      this.vehicleErrorMessage = exception.error.message;
    });
  }
}
