import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  getBooking(bookingId: number): any{
    return this.httpClient.get("http://localhost:8000/ovms/booking/" + bookingId);
  }
  getAllBookings(): any{
    return this.httpClient.get("http://localhost:8000/ovms/bookings");
  }
 
  deleteBooking(bookingId :number): any{
    return this.httpClient.delete("http://localhost:8000/ovms/booking/" + bookingId);
  }

  addBooking(booking: Booking): any{
    return this.httpClient.post("http://localhost:8000/ovms/booking/", booking);
  }

  updateBooking(booking: Booking): any{
    return this.httpClient.put("http://localhost:8000/ovms/booking/", booking);
  }

  getBookingsByCustomer(customerId: number):any{
    return this.httpClient.get("http://localhost:8000/ovms/bookingsby/" + customerId);
  }

  getBookingsByBoookingDate(bookingDate: Date): any{
    return this.httpClient.get("http://localhost:8000/ovms/bookings/" + bookingDate);
  }
  
}
