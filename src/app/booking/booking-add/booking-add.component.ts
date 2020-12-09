import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { CommonService } from 'src/app/common.service';
import { Customer } from 'src/app/customer';
import { Driver } from 'src/app/driver';
import { User } from 'src/app/user';
import { Vehicle } from 'src/app/vehicle';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {
  
  role: String;
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
  vehicleId: any;
  
  constructor(private bookingService: BookingService, private service: CommonService, 
    private vehicleService: VehicleService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.booking.customer = this.service.customer;
    this.role = this.service.getRole();
   }
   
   ngOnInit(): void {
     this.vehicleId = this.activatedRoute.snapshot.paramMap.get('bookingId');
     this.booking.vehicle.vehicleId = this.vehicleId; 
   }
  

  submitAddForm(bookingForm:any){
    this.vehicleErrorMessage ='';
    this.vehicleService.getVehicle(this.booking.vehicle.vehicleId)
      .subscribe((response: any)=>{
                    this.booking.vehicle = response;
                  });

    this.bookingService.addBooking(this.booking).subscribe((response: any)=>{
        console.log("What" + JSON.stringify(response));
        this.booking = response;
        this.router.navigate(['/payment/add/', this.booking.bookingId]);
    },
    (exception: any)=>{
      console.log("From book add" + JSON.stringify(exception));
      this.formValidErrorMessage = exception.error.Errors;
      this.vehicleErrorMessage = exception.error.message;
    });
  }

}
