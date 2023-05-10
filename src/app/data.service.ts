import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public studData:any=[
  {name:"Shivnath Patil",age:25},
  {name:"Nehal Rajput", age:26}
]


getStudentData(){
  return this.studData
}
  constructor(private http:HttpClient) { 
  }
  getUserdata(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  postApiData(data:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users",data)
  }


}
