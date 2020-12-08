import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-bookingby-show]',
  templateUrl: './bookingby-show.component.html',
  styleUrls: ['./bookingby-show.component.css']
})
export class BookingbyShowComponent implements OnInit {

  @Input() booking: any;
  @Output() delete: any = new EventEmitter();
  @Output() update: any = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  updateBooking(bookingId: any){
    this.update.emit(bookingId);
  }

  deleteBooking(booking: any){
    this.delete.emit(booking);
  }
  
}
