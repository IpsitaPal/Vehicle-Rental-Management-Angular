import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
vehicles: any;
searchByVhclId: any;
searchByVhclIdErrorMessage: any;
deleteErrorMessage:any;

  constructor(private vehicleService: VehicleService, private router: Router) { }
 

  ngOnInit(): void {

    this.vehicleService.getAllVehicles().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.vehicles=response;
    })
  }

  
  displayAddForm(){
    this.router.navigate(['/vehicle-add']);
  }

  updateVehicleParent(vehicle: any)
  {
    this.router.navigate(['/vehicle/edit'], {queryParams: vehicle})
  
  }
  deleteVehicleParent(vehicleId: any){

    this.searchByVhclId="";
    this.searchByVhclIdErrorMessage="";
    this.deleteErrorMessage="";
    this.vehicleService.deleteVehicle(vehicleId).subscribe((response: any)=>{
      this.vehicles = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.deleteErrorMessage = exception.error.message;
    });
     
  }


  
  displayViewAllForm(){
  
    this.searchByVhclId="";
    this.deleteErrorMessage="";
    this.searchByVhclIdErrorMessage="";
    this.vehicleService.getAllVehicles().subscribe((response: any)=>{
      console.log("Get all"+ response);
      this.vehicles=response;
    })
  }

  searchByVhclIdForm(searchByVhclId: any){
    
    this.deleteErrorMessage="";
   
    this.searchByVhclIdErrorMessage="";
    this.vehicleService.getVehicle(searchByVhclId).subscribe((response: any)=>{
      this.vehicles = response;
    },
    (exception: any)=>{
      console.log(JSON.stringify(exception));
      this.searchByVhclIdErrorMessage = exception.error.message;
    });
  }
 
}