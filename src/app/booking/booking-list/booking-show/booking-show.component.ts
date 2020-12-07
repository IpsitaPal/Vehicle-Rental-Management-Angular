import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from '../../booking';

@Component({
  selector: '[app-booking-show]',
  templateUrl: './booking-show.component.html',
  styleUrls: ['./booking-show.component.css']
})
export class BookingShowComponent implements OnInit {

  @Input() booking: any;
  @Output() delete: any = new EventEmitter();
  @Output() update: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  updateBooking(booking: any){
    this.update.emit(booking);
  }

  deleteBooking(booking: any){
    this.delete.emit(booking);
  }

}
