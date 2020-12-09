import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { CommonService } from 'src/app/common.service';
import { Customer } from 'src/app/customer';
import { Driver } from 'src/app/driver';
import { Payment } from 'src/app/payment';
import { PaymentService } from 'src/app/payment/payment.service';
import { Vehicle } from 'src/app/vehicle';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  vehicleErrorMessage: any;
  formValidErrorMessage:any;

  driverNew: Driver = {driverId: 0, firstName: '', lastName: '', contactNumber: '',
    email: '', address: '', chargesPerDay: 0, licenseNo: ''}
  customerNew: Customer = {customerId: 0, firstName: '', lastName: '', mobileNumber: '',
    emailId: '',  address: ''}
  vehicleNew: Vehicle = {vehicleId: 0, vehicleNumber: '', type: '', category: '', description: '',
    location: '', capacity: '', chargesPerKM: 0, fixedCharges: 0, driver: this.driverNew }
  originalBooking: Booking ={bookingId: 0, bookingDate: new Date(2010,11,10), bookedTillDate: new Date(2010,11,10),
    bookingDescription: " ", totalCost: 0,distance: 0, customer: this.customerNew, vehicle: this.vehicleNew}
  updatedBooking: Booking ={bookingId: 0, bookingDate: new Date(2010,11,10), bookedTillDate: new Date(2010,11,10),
   bookingDescription: " ", totalCost: 0,distance: 0, customer: this.customerNew, vehicle: this.vehicleNew}
   
  editBookingId: any;
  role: String = "";

  constructor(private bookingService: BookingService, private router: Router, 
    private activatedRoute: ActivatedRoute, private service: CommonService, private paymentService: PaymentService) { 
      this.originalBooking.customer = this.service.customer;
      this.updatedBooking.customer = this.service.customer;
      this.role = this.service.getRole();
    }

  ngOnInit(): void {

    this.editBookingId = this.activatedRoute.snapshot.paramMap.get('bookingId');
    this.bookingService.getBooking(this.editBookingId).subscribe((response: any)=>{
      console.log("Get booking"+ response);
      this.originalBooking = response;
      this.updatedBooking = response
    })
  }

  submitEditForm(){
    this.bookingService.updateBooking(this.updatedBooking).subscribe((response: any)=>{
      if(this.role == 'admin')
        this.router.navigate(['/booking']);
      if(this.role == 'customer')
        this.router.navigate(['/bookingby']);
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.formValidErrorMessage = exception.error.Errors;
      this.vehicleErrorMessage = exception.error.message;
    });
  }
}
    
