import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/booking';
import { BookingAddComponent } from 'src/app/booking/booking-add/booking-add.component';
import { BookingService } from 'src/app/booking/booking.service';
import { Customer } from 'src/app/customer';
import { Driver } from 'src/app/driver';
import { Payment } from 'src/app/payment';
import { Vehicle } from 'src/app/vehicle';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  payment!: Payment;
/*
  customer: Customer = {customerId: 0, firstName: '', lastName: '', mobileNumber: '',
      emailId: '',  address: ''}
  driver: Driver = {driverId: 0, firstName: '', lastName: '', contactNumber: '',
    email: '', address: '', chargesPerDay: 0, licenseNo: ''}
  
  vehicle: Vehicle = {vehicleId: 0, vehicleNumber: '', type: '', category: '', description: '',
    location: '', capacity: '', chargesPerKM: 0, fixedCharges: 0, driver: this.driver }
  
  booking: Booking = new Booking(0, new Date(), new Date(), "", 0, 0, this.customer, this.vehicle);
  
  */
  bookingId: any;
  booking!: Booking;
  cardDetail: String = "";
  
  constructor(private paymentService: PaymentService, private router: Router, 
    private activatedRoute: ActivatedRoute, private bookingService: BookingService) { 
  }

  ngOnInit(): void {
    this.bookingId = this.activatedRoute.snapshot.paramMap.get('bookingId');
  }

  add() {
    this.bookingService.getBooking(this.bookingId)
      .subscribe((response: any) => {
          console.log(JSON.stringify(this.booking));
          this.booking = response;
          this.payment = new Payment(0, "Credit", new Date(), this.booking, "Paid");
          console.log("Hello from add component" + JSON.stringify(this.payment));
          this.paymentService.addPayment(this.payment).subscribe((response: any) => {
                  this.router.navigate(['/bookingby']);
          });
        });
    

  }
}
