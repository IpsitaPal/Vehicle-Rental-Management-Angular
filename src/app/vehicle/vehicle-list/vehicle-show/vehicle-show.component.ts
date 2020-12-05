import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-show',
  templateUrl: './vehicle-show.component.html',
  styleUrls: ['./vehicle-show.component.css']
})
export class VehicleShowComponent implements OnInit {

  @Input() vehicleId: any;
  @Output() delete = new EventEmitter();
  constructor() {
    
   }

  ngOnInit(): void {
  }

  deleteVehicle(id: number){
    this.delete.emit(id);
  }
}
