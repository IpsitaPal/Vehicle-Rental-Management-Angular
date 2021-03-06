import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Payment } from 'src/app/payment';

@Component({
  selector: '[payment-show]',
  templateUrl: './payment-show.component.html',
  styleUrls: ['./payment-show.component.css']
})
export class PaymentShowComponent implements OnInit {

  @Input() 
    payment!: Payment;
  @Output() 
    delete: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancelPayment(id: number) {
    this.delete.emit(id);
  }

}
