import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../user';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  @Input() userN:any;
  constructor() { }

  ngOnInit(): void {
  }

}
