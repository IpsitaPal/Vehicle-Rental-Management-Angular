import { Booking } from '../booking/booking';

export class Payment {
    paymentId: number;
	paymentMode: String;
	paymentDate: Date;
	//booking: Booking;
    paymentStatus: String;

    constructor(paymentId: number, paymentMode: String, paymentDate: Date, 
			//booking: Booking, 
			paymentStatus: String) {
        this.paymentId = paymentId;
		this.paymentMode = paymentMode;
		this.paymentDate = paymentDate;
		///this.booking = booking;
		this.paymentStatus = paymentStatus;
	}
	
}
