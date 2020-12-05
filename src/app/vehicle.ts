export class Vehicle{
    vehicleId: number;
    vehicleNumber: String;
    type: String;
    category: String;
    description: String;
    location: String;
    capacity: String;
    chargesPerKM: number;
    fixedCharges: number;
    driver: Driver;

    constructor(vehicleId: number,vehicleNumber: String,type:  String,category:  String,description: String,
        location: String,capacity: String,chargesPerKM: number, fixedCharges: number,driver: Driver) {
    
    this.vehicleId = vehicleId;
    this.vehicleNumber = vehicleNumber;
    this.type = type;
    this.category = category;
    this.description = description;
    this.location = location;
    this.capacity = capacity;
    this.chargesPerKM = chargesPerKM;
    this.fixedCharges = fixedCharges;
    this.driver = driver;
    
}

}

