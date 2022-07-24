export class UserRegistration {
    firstName: string = "";
    lastName: string = "";
    emailId: string = "";
    address: string = "";
    password: string = "";

    constructor(firstname:string, lastname: string, emailId:string, address: string, password:string ) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.emailId = emailId;
        this.address = address;
        this.password = password;

    }
}