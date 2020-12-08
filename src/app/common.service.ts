import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  currentUser: User = new User('', '', '');
  constructor() { 
    //this.currentUser = null;   //make interface
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  getRole() : String {
    return this.currentUser.role;
  }
}
