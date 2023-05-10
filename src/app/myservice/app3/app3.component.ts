import { Component } from '@angular/core';
import { App3Service } from 'src/app/app3.service';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component {

  public serData:any=[];
  public userData:any=[];

  constructor(private ser:App3Service){}

  getSerData(){
    this.ser.getApiData().subscribe((res:any)=>{
      this.serData=res
      console.log(this.serData)
    })
  }
  onSubmitData(data:any){
    this.serData.push(data.value)
    console.log(this.serData)
    this.postSerData()
  }
  postSerData(){
    this.ser.posttApiData(this.serData).subscribe((res:any)=>{
      console.log(res)
    })
  }
  deleteSerData(id:any){
    console.log(IdleDeadline)
    this.ser.deleteApiData(id).subscribe((res:any)=>{
      console.log(res);
      this.getSerData()
    })
  }
 
}
