export class Driver {
    driverId: number;
    firstName: String;
    lastName: String;
    contactNumber: String;
    email: String;
    address: String;
    chargesPerDay: number;
    licenseNo: String;

    constructor(driverId: number, firstName: String, lastName: String, contactNumber: String,
        email: String, address: String, chargesPerDay: number, licenseNo: String) {
        this.driverId = driverId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.address = address;
        this.chargesPerDay = chargesPerDay;
        this.licenseNo = licenseNo;
    }
}
