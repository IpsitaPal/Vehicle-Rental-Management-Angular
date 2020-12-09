import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-booking-show]',
  templateUrl: './booking-show.component.html',
  styleUrls: ['./booking-show.component.css']
})
export class BookingShowComponent implements OnInit {

  @Input() booking: any;
  @Input() payment: any;
  @Output() delete: any = new EventEmitter();
  @Output() update: any = new EventEmitter();
  @Output() show: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateBooking(booking: any){
    this.update.emit(booking);
  }

  deleteBooking(booking: any){
    this.delete.emit(booking);
  }

  showPayment(payment: any) {
    console.log("payment - booking: " + JSON.stringify(this.payment));
    this.show.emit(payment);
  }

  isCancelled() : boolean {
    if(this.payment.paymentStatus == "Cancelled")
      return true;
    return false;
  }

}
