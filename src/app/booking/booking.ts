export class Booking{
    bookingId: number;
    bookingDate: Date;
    bookedTillDate: Date;
    bookingDescription: String;
    totalCost: number;
    distance: number;
    //customer: Customer;
    //vehicle: Vehicle;

    constructor(bookingId: number, bookingDate: Date, bookedTillDate: Date, bookingDescription: String, 
                  totalCost: number,distance: number){
                      this.bookingId = bookingId;
                      this.bookingDate = bookingDate;
                      this.bookedTillDate = bookedTillDate;
                      this.bookingDescription = bookingDescription;
                      this.totalCost = totalCost;
                      this.distance = distance;
                      //this.customer = customer; , customer: Customer,vehicle: Vehicle
                     // this.vehicle = vehicle;
                  }
}