import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get("https://api.github/users/abdullah").toPromise() //Get pulls or extracts the data from the api
    .then((data: any) => {
    console.log(data)
    });
    //Calling the api using promise.
    //Promise- If you want to make a asyncronous call(Having more than one line of code)
    //When we call an api usimg a promise this call will be given to a slave(worker) thread the main thread will carry on executing the next lines of code.work of executing above code will be given to the given to the slave thread
    //Once it is completed the task it will come to the master(main) thread and say im done.
    //we convert something to promise To work with it asynchronously. 
  }
  }