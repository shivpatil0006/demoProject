import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform1',
  templateUrl: './templateform1.component.html',
  styleUrls: ['./templateform1.component.css']
})
export class Templateform1Component {

  public alldata:any=[];
  public showTable:boolean=false;

  public fn:any="";
  public ln:any="";
  public eml:any="";
  public idd:any;
  public count:number=1;

  onSubmitData(data:any){
    console.log("This is template form");
    console.log(data.value);
    
    if( data.value.id == undefined){
      data.value.id=this.count;
      this.alldata.push(data.value) 
    if(this.alldata.length > 0){
       this.showTable=true;
    }
    this.count++;
    } else {
      console.log(data.value);
      this.alldata.forEach((element:any) => {
        if(data.value.id==element.id){
          console.log(element);
          element.fname=data.value.fname
          element.lname=data.value.lname
          element.email=data.value.email
        }
      });
      console.log(this.alldata);
    }
  }

  onDelete(dt:any){
   console.log(dt);
   this.alldata.forEach((element:any,index:any) => {
    if(element.id==dt.id){
      this.alldata.splice(index,1);
    }
   });

  }

  onUpdate(dt:any){
    console.log(dt);
    this.idd=dt.id;
    this.fn=dt.fname;
    this.ln=dt.lname;
    this.eml=dt.email;
  }
}
