import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  constructor(private service:CommonService) { }

  ngOnInit(): void {
  }

  getUser(): String {
    return this.service.getRole();
  }

}
