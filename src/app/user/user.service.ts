import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): any {
    return this.httpClient.get<any>("http://localhost:8080/allusers");
  }

  addUser(newUser:User):any{
    //this.userArray[this.userArray.length]=newUser;
    
    console.log("Hello from service" + JSON.stringify(newUser));
    return this.httpClient.post("http://localhost:8080/adduser", newUser);

  }
  
  checkLogin(user: User):Observable<User>{
     return this.httpClient.post<User>("http://localhost:8080/login", user);
  }
}
