import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  constructor(public httpClient: HttpClient){}
  sendGetRequest(){
    this.httpClient.get('https://api.publicapis.org/categories').subscribe((res)=>{
        console.log(res);
    });
}
  title = 'homework';
  function =' ';
  num=0;
  x=0;
  x2=0
  y=0;
  y2=0
  text ='true';
  isPrime=true;

  selection(event:any)
  {
    this.function = event.target.value;
  }
  event(){
  };

  add(value:any){
    this.num=Math.round(value);
    if(this.num<=0)
    {this.num=1;}

    if(this.function=='isPrime'){
      if(this.num == 1){
        this.text = 'false';
      }
      else if (this.num > 1) {
        for (let i = 2; i < this.num; i++) {
            if (this.num % i == 0) {
                this.isPrime = false;
                break;
            }
        }
    
        if (this.isPrime) {
            this.text ='true';
        } 
        else {
          this.text ='false';
          this.isPrime= true;
        }
  }

  }
    if(this.function=='isFib'){
      this.x = 5 * this.num * this.num + 4;
      this.x2 = 5 * this.num * this.num + 4;
      this.y = 5 * this.num * this.num - 4;
      this.y2 = 5 * this.num * this.num - 4;
      if(Math.round(Math.sqrt(this.x))*Math.round(Math.sqrt(this.x)) ==this.x2 || Math.round(Math.sqrt(this.y))*Math.round(Math.sqrt(this.y)) ==this.y2 )
      {
        this.text ='true';
      }
      else{
        this.text = 'false';
      }

      }
  };

  
}
