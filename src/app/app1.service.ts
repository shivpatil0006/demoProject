import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class App1Service {

  constructor(private http:HttpClient){}

  getApiData(){
    return this.http.get("https://reqres.in/api/users")
  }

  deleteApiData(){
    return this.http.delete("https://reqres.in/api/users")
  }
}
