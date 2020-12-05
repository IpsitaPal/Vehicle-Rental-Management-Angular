import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.css']
})
export class VehicleUpdateComponent implements OnInit {

  constructor() { }

  @Output() update = new EventEmitter();
  UpdateVehicle: any;
  ngOnInit(): void {
  }
  updateVehicle(UpdateVehicle: string){
     this.update.emit(UpdateVehicle);
}
}