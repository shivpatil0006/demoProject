import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  public name:any="shri ganesha namah";

  public Date:any=new Date()

  public currency:any=10000;

  public StudData:any =[
    {name:"Alex", age:15},
    {name:"Simi", age:18}
  ]




}
