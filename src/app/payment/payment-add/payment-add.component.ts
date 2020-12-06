import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  payment: Payment;

  constructor(private paymentService: PaymentService, private router: Router) { 
      this.payment = new Payment(0, "", new Date(), "Paid");
  }

  ngOnInit(): void {
  }

  sayHi() {
    console.log("Hi!")
  }
  
  add() {
    this.paymentService.addPayment(this.payment).subscribe((response: any) => {
      console.log("Hello from add component" + JSON.stringify(this.payment));
      this.router.navigate(['/payment']);
    }
    );
  }
}
