export class User{
    userid:string;
    password:string;
role:string;

    constructor(userid:string,password:string,role:string){
        this.userid=userid;
        this.password=password;
      this.role=role;
    }
}