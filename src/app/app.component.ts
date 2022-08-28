import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './UserResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'callingapi';
  results='';
  constructor(private http: HttpClient) {
  }//Injecting the client
  
  ngOnInit(): void{
   
    //http Post- Allows you to insert the data
   const req = this.http.post('http://jsonplaceholder.typicode.com/posts',
    {
    title: 'foo',
    body: 'bar',
    userId: 1
   })
   .subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("Error occured");
    }
   );
    
  }
  }