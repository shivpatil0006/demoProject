import { Component } from '@angular/core';
import { MyCrudSerService } from '../my-crud-ser.service';

@Component({
  selector: 'app-my-crud',
  templateUrl: './my-crud.component.html',
  styleUrls: ['./my-crud.component.css']
})
export class MyCrudComponent {

  
  public apiData:any;
  constructor(private ser:MyCrudSerService){

  }

  getSerData(){
    this.ser.getApiData().subscribe((res:any)=>{
      this.apiData=res,
      console.log(res)
    })
  }

  onSubmitData(data1:any){
    this.postSerData(data1)
  }

  postSerData(data:any){
    this.ser.postApidata(data).subscribe((res:any)=>{
      console.log(res)
    })
  }

  deleteSerdata(id:any){
    this.ser.deleteApiData(id).subscribe((res:any)=>{
      console.log(res)
    })
  }








}
