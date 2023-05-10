import { Component } from '@angular/core';
import { App1Service } from 'src/app/app1.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component {
  
  public userData:any;
  constructor(private ser:App1Service){}

  getApiData(){
    this.ser.getApiData().subscribe((res:any)=>{
      this.userData=res.data
    })
  }
  onDeletedata(){
    this.ser.deleteApiData().subscribe((res:any)=>{
      console.log(res);
    })
  }
  delUserdata(data1:any){
    this.userData.forEach((element:any) => {
      if(element.id==data1.id){
        this.userData.splice(data1,1)
      }
    });
    this.onDeletedata()
  }
}
