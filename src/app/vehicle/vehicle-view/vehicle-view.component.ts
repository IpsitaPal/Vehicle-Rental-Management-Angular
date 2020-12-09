import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.css']
})
export class VehicleViewComponent implements OnInit {
  
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

}
