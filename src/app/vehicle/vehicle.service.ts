import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  
  addVehicle(vehicle: Vehicle): any {
    return this.httpClient.post("http://localhost:8080/ovms/vehicle", vehicle);
  }

  deleteVehicle(vehicleId: number): any {
    return this.httpClient.delete("http://localhost:8080/ovms/vehicle/" + vehicleId);
  }

  updateVehicle(vehicle: Vehicle): any{
    return this.httpClient.put("http://localhost:8080/ovms/vehicle/", vehicle);
  }

  getAllVehicles(): any {
    return this.httpClient.get("http://localhost:8080/ovms/vehicle");
  }

  getVehicle(vehicleId: number): any {
    return this.httpClient.get("http://localhost:8080/ovms/vehicle/" + vehicleId);
  }

}
