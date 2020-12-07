import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking/booking';
import { Customer } from 'src/app/customer';
import { Driver } from 'src/app/driver';
import { Vehicle } from 'src/app/vehicle';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  payment: Payment;
  customer: Customer = new Customer(1, "Alesia", "Braganza", "9879871232", "ale@sia", "Chennai");
  driver: Driver = new Driver(1, "John", "Doe", "0987654321", "john@doe", "Chennai", 100.0, "dhsd213");
  vehicle: Vehicle = new Vehicle(2, "TN10K2746", "Bus", "ac", "desc", "Chennai", "25", 25.0, 200.0, this.driver,);
  booking: Booking = new Booking(2, new Date("2020-12-10"), new Date("2020-12-10"), 
        "Scheduled", 1200, 12, this.customer, this.vehicle);
  cardDetail: String = "";
  
  constructor(private paymentService: PaymentService, private router: Router) { 
      this.payment = new Payment(0, "Credit", new Date(), this.booking, "Paid");
  }

  ngOnInit(): void {
  }

  add() {
    //console.log("Hello from add component" + JSON.stringify(this.payment));
    //set false
    this.paymentService.addPayment(this.payment).subscribe((response: any) => {
      
      this.router.navigate(['/payment']);
    }
    );

  }
}
