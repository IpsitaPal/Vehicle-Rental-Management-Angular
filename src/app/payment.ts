import { Booking } from './booking';

export class Payment {
    paymentId: number;
	paymentMode: string;
	paymentDate: Date;
	booking: Booking;
    paymentStatus: string;

    constructor(paymentId: number, paymentMode: string, paymentDate: Date, 
			booking: Booking, paymentStatus: string) {
        this.paymentId = paymentId;
		this.paymentMode = paymentMode;
		this.paymentDate = paymentDate;
		this.booking = booking;
		this.paymentStatus = paymentStatus;
	}
	/*setPaymentId(paymentId: number) {
		this.paymentId = paymentId;
	}	

	getPaymentId(paymentId: number): number{
		return this.paymentId;
	}*/	
}

