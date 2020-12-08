import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { ComponentService } from 'src/app/component.service';
import { Customer } from 'src/app/customer';
import { Driver } from 'src/app/driver';
import { Vehicle } from 'src/app/vehicle';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

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
  


  constructor(private bookingService: ComponentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    //this.originalBooking = 
   // const queryParamEntries = this.activatedRoute.snapshot.queryParamMap.keys.map(key => [key, queryParamMap.get(key)])
    //const queryParamMap = this.activatedRoute.snapshot['queryParamMap'];
    //this.originalBooking = this.activatedRoute.snapshot.queryParamMap.get('myQueryParam');

    //const params = this.activatedRoute.snapshot.queryParamMap;
    /*this.originalBooking = {
      bookingId: parseInt(queryParamMap.get('bookingId') ?? '0'),
      bookingDate: queryParamMap.get('bookingDate') ?? new Date(),
      bookingDate: queryParamMap.get('bookingDate') ?? '',
      bookingDescription: queryParamMap.get('name') ?? '',
      totalCost: parseInt(queryParamMap.get('totalCost') ?? '0'),
      distance: parseInt(queryParamMap.get('totalCost') ?? '0'),
      customer: queryParamMap.get('customer') ?? '',
      vehicle: queryParamMap.get('vehicle') ?? 'vehicle',
    };
    this.updatedBooking = clone(this.originalBooking);
    */
    

  }

  submitEditForm(){
    this.bookingService.updateBooking(this.updatedBooking).subscribe((response: any)=>{
      this.router.navigate(['/booking']);
    });
  }




}
