import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform3',
  templateUrl: './templateform3.component.html',
  styleUrls: ['./templateform3.component.css']
})
export class Templateform3Component {

  public allFormData:any=[];
  public showTable:boolean=false;
  public count:number=0;
  public idd:any;
  public unm:any='';
  public eml:any='';
  public gen:any='';

  onSubmitData(data:any){
    data.value.id=this.count
    this.allFormData.push(data.value)
    if(this.allFormData.length > 0){
      this.showTable=true;
      console.log(data.value)
    } this.count++
  }
  onDelete(del:any){
    this.allFormData.forEach((element:any) => {
      if(element.id==del.id){
        this.allFormData.splice(this.allFormData.indexOf(element),1)
      }
    });
  }
  onEditData(edit:any){
    this.idd=edit.id
    this.unm=edit.uname
    this.eml=edit.email
    this.gen=edit.gender
  }
  upData(data1:any){
    this.allFormData.forEach((element:any)=>{
      if(data1.id==element.id){
        this.allFormData.splice(this.idd,1,data1.value)
      }
    }) 
    console.log(data1.value)

  }
}
