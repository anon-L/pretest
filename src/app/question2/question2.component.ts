import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question2', 
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  title:any ;
  term: string = "";


  constructor(public httpClient: HttpClient, private titleService:Title){
    this.titleService.setTitle("question2");
  }

  sendGetRequest(){
    this.httpClient.get('https://api.publicapis.org/categories').subscribe((res)=>{
        this.title= res;
    });
}

  ngOnInit(): void {
  }

}
