import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  addVehicle(vehicle: Vehicle): any {
    return this.httpClient.post("http://localhost:8090/ovms/vehicle", vehicle);
  }

  deleteVehicle(id: number): any {
    return this.httpClient.delete("http://localhost:8090/ovms/vehicle/" + id);
  }

  getVehicle(): any {
    return this.httpClient.get("http://localhost:8090/ovms/vehicle");
  }


  getAllVehicle(id: number): any {
    return this.httpClient.get("http://localhost:8090/ovms/vehicle/" + id);
  }

}
