import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class App3Service {

  constructor(private Http:HttpClient) { }

  getApiData(){
    return this.Http.get("https://jsonplaceholder.typicode.com/users")
  }
  posttApiData(data1:any){
    return this.Http.post("https://jsonplaceholder.typicode.com/users",data1)
  }
  deleteApiData(id:any){
    return this.Http.delete("https://jsonplaceholder.typicode.com/users"+id)
  }
}
