import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  currentUser: User = new User('', '', '');
  constructor(private service: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.service.setCurrentUser(this.currentUser);
    
    this.router.navigate(['/home']);
  }
}
