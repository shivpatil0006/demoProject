import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public player1:any=['name:Virat Kohli','age:34']
  public player2:any=['name:Rohit Sharma','age:36']
  public player3:any=['name:KL Rahul','age:35']

  constructor(private http:HttpClient){}

  getp1Data(){
    return this.player1
  }
  getp2Data(){
    return this.player2
  }
  getp3Data(){
    return this.player3
  }

  getUserData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  postAPIData(data:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users",data)
  }

 
   }

