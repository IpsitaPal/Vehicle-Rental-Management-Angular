import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/driver';
import { Vehicle } from 'src/app/vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  formValidErrorMessage: any;

  newDriver: Driver = {driverId: 0, firstName: '', lastName: '', contactNumber: '',
  email: '', address: '', chargesPerDay: 0, licenseNo: ''}
  newVehicle: Vehicle = {vehicleId: 0,vehicleNumber: '',type: '',category: '',description:'',location:'',capacity: '',chargesPerKM: 0,fixedCharges: 0, driver: this.newDriver }
 
  constructor( private vehicleService: VehicleService, private router: Router){}
  

  ngOnInit(): void {
   
  }  
  
  submitAddForm(vehicleForm:any)
  {      
        console.log(vehicleForm);
        console.log(JSON.stringify(this.newVehicle));
        this.vehicleService.addVehicle(this.newVehicle)
          .subscribe((response: any) => {
            console.log(response);
        this.router.navigate(['/vehicle-list']);
      },
      (exception: any)=>{
        console.log(JSON.stringify(exception));
        this.formValidErrorMessage = exception.error.Errors;
      });       
  }
  
}
  