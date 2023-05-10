import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform2',
  templateUrl: './templateform2.component.html',
  styleUrls: ['./templateform2.component.css']
})
export class Templateform2Component {

  public allData:any=[];
public idd:any;
public count:number=1;

public fn:any;
public ln:any;

public showTable:boolean=false;




  onSubmitData(data:any){

    if(data.value.id==undefined){
      data.value.id=this.count
      this.allData.push(data.value)
    if(this.allData.length >0){
      this.showTable=true;
    }this.count++;
    }else{
      this.allData.forEach((element:any) => {
        if(data.value.id==element.id){
          element.fname=data.value.fname
          element.lname=data.value.lname
        }
      });
    }
  }

  onDelete(data:any){
    console.log(data.value)
     this.allData.forEach((element:any,index:any) => {
      if(element.id== data.id){
        this.allData.splice(index,1)
      }
     });
     if(this.allData.length==0){
      this.showTable=false
     }
  }

  onEdit(data:any){
    this.idd=data.id
    this.fn=data.fname
    this.ln=data.lname
  }
}




// onDelete(dt:any){
    
//   console.log(dt);
//   console.log(this.alldata);
//   var delVar=dt;
//   this.alldata.splice(this.alldata.indexOf(delVar),1);
//   alert(" Do You want to Delet Data");

