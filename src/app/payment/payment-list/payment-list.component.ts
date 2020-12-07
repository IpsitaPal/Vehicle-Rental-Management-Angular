import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/booking/booking';
import { Customer } from 'src/app/customer';
import { Driver } from 'src/app/driver';
import { Vehicle } from 'src/app/vehicle';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  driver: Driver = new Driver(0, '', '', '', '', '', 0, '');
  vehicle: Vehicle = new Vehicle(0, '', '', '', '', '', '', 0, 0, this.driver);
  customer: Customer = new Customer(1, '', '', '', '', '');
  booking: Booking = new Booking(0, new Date(), new Date(), '', 0, 0, this.customer, this.vehicle);
  payment: Payment = new Payment(0, '', new Date(), this.booking, '');

  allPayments!: Payment[];
  errorMessage: String = "";
  id: number = 0;
  idType!: String;

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe(
        (response: any[])=> {    this.allPayments = response;   },
        (exception: any) => {    this.errorMessage = exception.error.message;          }
    );
  }

  findBy(dropValue : any) {
    this.idType = dropValue.target.value;      
    console.log(this.id + " " + this.idType);
    if(this.idType == "customer")
    {
      this.paymentService.getAllPaymentsByCustomer(this.id).subscribe(
        (response: any[])=> {     this.allPayments = response;    },
        (exception: any) => {    this.errorMessage = exception.error.message;          }
      );
    }
    else if (this.idType == "booking") 
    {
      this.allPayments = [];
      this.paymentService.getAllPaymentsByBooking(this.id)
        .subscribe(               (response: Payment) => 
                                      { 
                                        console.log(response)
                                        this.payment = response 
                                      },
                                  (exception: any) => 
                                      { 
                                        this.errorMessage = exception.error.message;
                                        console.log("Hi" + JSON.stringify(this.errorMessage))
                                      }
      );
      console.log("Check 1: " + JSON.stringify(this.payment))
      this.allPayments.push(this.payment);
    } 
    this.idType = ""; 
    this.errorMessage = "";
  }

  deletePaymentParent(id: number) {
    console.log("Delete from list" + id);
    this.paymentService.deletePayment(id).subscribe((response: any) => {
      this.allPayments = response;
    });
  }

}
