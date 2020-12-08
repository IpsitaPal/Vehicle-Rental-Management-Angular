import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/driver';
import { Vehicle } from 'src/app/vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.css']
})
export class VehicleUpdateComponent implements OnInit {

  newDriver: Driver = {driverId: 0, firstName: '', lastName: '', contactNumber: '',
  email: '', address: '', chargesPerDay: 0, licenseNo: ''}
  
  originalVehicle: any = {vehicleId: 0, vehicleNumber: " ", type: '', category: '', description: '',
    location: '', capacity: '', chargesPerKM: 0, fixedCharges: 0, driver: this.newDriver }

    updatedVehicle: any= {vehicleId: 0, vehicleNumber: " ", type: '', category: '', description: '',
    location: '', capacity: '', chargesPerKM: 0, fixedCharges: 0, driver: this.newDriver }

  
  constructor(private vehicleService: VehicleService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  
  submitEditForm(){
    console.log(JSON.stringify(this.updatedVehicle));
    this.vehicleService.updateVehicle(this.updatedVehicle).subscribe((response: any)=>{
      this.router.navigate(['/vehicle']);
    });
  }
}