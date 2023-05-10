import { Component } from '@angular/core';

@Component({
  selector: 'app-directives1',
  templateUrl: './directives1.component.html',
  styleUrls: ['./directives1.component.css']
})
export class Directives1Component {

public text: any="Hello this is structural directives";
public showFlag:boolean=false;
public age=20

public country:any=["India","America","China","Rassia","Canada"];
public selectCountry="America";

public testClass1:any=""
public testStyle1:any="";

public testStyle2: any = { 'background-color': 'yellow' };
  public testStyle3: any = { 'background-color': 'red' };

constructor(){
  if(this.age>18 && this.showFlag){
    this.testClass1="test1"
    this.testStyle1={'color':'blue'}
  }else{
    this.testClass1="test2"
    this.testStyle1={'color':'yellow'}
  }
}
}
