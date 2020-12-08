export class User{
    userId:string;
    password:string;
    role:string;

    constructor(userId:string,password:string,role:string){
        this.userId=userId;
        this.password=password;
      this.role=role;
    }
}