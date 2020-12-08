import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from 'src/app/component.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  newVehicle: any ='';
  constructor( private vehicleService: ComponentService, private router: Router){}
  

  ngOnInit(): void {
   
  }  
      submitAddForm(vehicleForm: any)
      {
          this.vehicleService.addVehicle(this.newVehicle);
          this.router.navigate(['/vehicle-list']);
      }
      
}
        
      
    