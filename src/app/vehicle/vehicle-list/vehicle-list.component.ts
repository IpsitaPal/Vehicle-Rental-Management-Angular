import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/component.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
vehicles: any;
  constructor(private vehicleService: ComponentService, private router: Router) { }
 

  ngOnInit(): void {
  }

  
  displayAddForm(){
    this.router.navigate(['/vehicle-add']);
  }

  updateVehicleParent(data: any)
  {
    this.router.navigate(['/vehicle-edit', data]);
  
  }
  deleteVehicleParent(id: number){
    this.vehicles=this.vehicleService.deleteVehicle(id);
   
  }
}
