export class Customer{
    customerId: number;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    emailId: string;
    address: string;

    constructor(customerId: number, firstName: string, lastName: string, mobileNumber: string,
        emailId: string,  address: string){
            this.customerId = customerId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.mobileNumber = mobileNumber;
            this.emailId = emailId;
            this.address = address;
        }

}