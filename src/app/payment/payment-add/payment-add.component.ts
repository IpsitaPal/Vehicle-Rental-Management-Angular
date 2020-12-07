import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking/booking';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  payment: Payment;
  booking: Booking = new Booking(5, new Date("2020-12-10"), new Date("2020-12-10"), "Scheduled", 1200, 12);
  cardName: String = "";

  constructor(private paymentService: PaymentService, private router: Router) { 
      this.payment = new Payment(0, "Credit", new Date(), this.booking, "Paid");
  }

  ngOnInit(): void {
  }

  sayHi() {
    console.log("Hi!")
  }
  
  add() {
    console.log("Hello from add component" + JSON.stringify(this.payment));
    this.paymentService.addPayment(this.payment).subscribe((response: any) => {
      this.router.navigate(['/payment']);
    }
    );
  }
}
