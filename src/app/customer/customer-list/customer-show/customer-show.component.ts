import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-customer-show]',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css']
})
export class CustomerShowComponent implements OnInit {

  @Input() customer: any;
  @Output() delete: any = new EventEmitter();
  @Output() update: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  updateCustomer(customer: any){
    this.update.emit(customer);
  }

  deleteCustomer(customer: any){
    this.delete.emit(customer);
  }

}
