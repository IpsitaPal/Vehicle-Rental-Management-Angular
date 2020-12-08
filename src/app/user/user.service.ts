import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray=[
    {userid:'533',password:'saikiran'}
  ];

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): any {
    return this.httpClient.get<any>("http://localhost:8080/allusers");
  }

  addUser(newUser:User):any{
    this.userArray[this.userArray.length]=newUser;
    
    console.log("Hello from service" + JSON.stringify(newUser));
    return this.httpClient.post("http://localhost:8080/adduser", newUser);

  }
  
  checkLogin(email1:string,password1:string,role1:string):Observable<User>{
    console.log(email1)
    console.log(password1)
    console.log(role1);
     return this.httpClient.post<User>("http://localhost:8080/login", 
              {userId:email1,password:password1,role:role1});
  }
}
