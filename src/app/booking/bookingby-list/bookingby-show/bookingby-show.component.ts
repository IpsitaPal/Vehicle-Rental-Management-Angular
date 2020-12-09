import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-bookingby-show]',
  templateUrl: './bookingby-show.component.html',
  styleUrls: ['./bookingby-show.component.css']
})
export class BookingbyShowComponent implements OnInit {

  @Input() booking: any;
  @Input() payment: any;
  @Output() delete: any = new EventEmitter();
  @Output() update: any = new EventEmitter();
  @Output() show: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateBooking(bookingId: any){
    this.update.emit(bookingId);
  }

  deleteBooking(booking: any){
    this.delete.emit(booking);
  }

  showPaymentBy(payment: any) {
    console.log("payment - bookingby: " + JSON.stringify(this.payment));
    this.show.emit(payment);
  }

  isCancelled() : boolean {
    if(this.payment.paymentStatus == "Cancelled")
      return true;
    return false;
  }
  
}
