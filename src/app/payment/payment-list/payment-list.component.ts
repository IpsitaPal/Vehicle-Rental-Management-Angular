import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  allPayments!: any[];

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe((response: any[])=>{
      this.allPayments = response;
    });
  }

  deletePaymentParent(id: number) {
    console.log("Delete from list" + id);
    this.paymentService.deletePayment(id).subscribe((response: any) => {
      this.allPayments = response;
    });

  }

}
