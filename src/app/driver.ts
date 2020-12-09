export class Driver {
    driverId: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    address: string;
    chargesPerDay: number;
    licenseNo: string;

    constructor(driverId: number, firstName: string, lastName: string, contactNumber: string,
        email: string, address: string, chargesPerDay: number, licenseNo: string) {
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
