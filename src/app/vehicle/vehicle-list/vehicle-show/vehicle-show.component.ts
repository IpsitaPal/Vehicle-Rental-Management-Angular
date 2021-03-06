import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-vehicle-show]',
  templateUrl: './vehicle-show.component.html',
  styleUrls: ['./vehicle-show.component.css']
})
export class VehicleShowComponent implements OnInit {

  @Input() vehicle: any;
  @Output() delete: any = new EventEmitter();
  @Output() update: any = new EventEmitter();

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
  }

  updateVehicle(vehicle: any){
    this.update.emit(vehicle);
  }
  deleteVehicle(vehicle: any){
    this.delete.emit(vehicle);
  }

  addBooking(vehicle: any){
    this.router.navigate(['/booking/add', vehicle.vehicleId]);
  }
}