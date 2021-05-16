import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  constructor(private titleService:Title)
  {this.titleService.setTitle("question3"); }

  ngOnInit(): void {
  }

}
