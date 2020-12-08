import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { User } from '../user';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  currentUser: User = new User('', '', '');
  
  constructor(private service:CommonService) { }

  ngOnInit(): void {
  }

  getUser(): String {
    return this.service.getRole();
  }

  logout() {
    this.service.setCurrentUser(this.currentUser);
  }

}
