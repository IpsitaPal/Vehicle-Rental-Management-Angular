export class Customer{
    customerId: number;
    firstName: String;
    lastName: String;
    mobileNumber: String;
    emailId: String;
    address: String;

    constructor(customerId: number, firstName: String, lastName: String, mobileNumber: String,
        emailId: String,  address: String){
            this.customerId = customerId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.mobileNumber = mobileNumber;
            this.emailId = emailId;
            this.address = address;
        }

}