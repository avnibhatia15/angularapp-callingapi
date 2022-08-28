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
    this.http.get<UserResponse>("https://api.github/users/abdullah").subscribe(data =>{ //Get pulls or extracts the data from the api{
    console.log("User Login: "+ data.login);
    console.log("Bio:"+ data.bio);
    });
    //Only extracting what i want
  }
  }