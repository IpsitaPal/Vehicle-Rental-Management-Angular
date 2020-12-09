import { Driver } from './driver';

export interface Vehicle {
    vehicleId: number;
    vehicleNumber: string;
    type: string;
    category: string;
    description: string;
    location: string;
    capacity: string;
    chargesPerKM: number;
    fixedCharges: number;
    driver: Driver;

  
}

