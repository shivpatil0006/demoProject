import { Component } from '@angular/core';

@Component({
  selector: 'app-binding2',
  templateUrl: './binding2.component.html',
  styleUrls: ['./binding2.component.css']
})
export class Binding2Component {

  public name:any="";

  public age=35;
  public link:any="";

  public fname:any="";


constructor(){
  this.name="Shivnath Patil";

  if(this.age>30){
    this.link="https://www.facebook.com";
  }else{
    this.link="https://www.google.com";
  }
}
  onClick(){
    console.log("This is event bindung")
  }

}
