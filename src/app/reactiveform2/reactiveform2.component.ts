import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform2',
  templateUrl: './reactiveform2.component.html',
  styleUrls: ['./reactiveform2.component.css']
})
export class Reactiveform2Component {

  public myForm:any;
  public Submitted:boolean=false;

  public allData:any=[];

  public showTable:boolean=false;

  public idd:any;

  public unm:any;
  public eml:any;
  public ps:any;
  public count:number=1;



constructor(private fb:FormBuilder){
  this.myForm=this.fb.group({
    uname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required]]

  })
}

  onSubmitData(){
   if(this.myForm.id==undefined){
  this.myForm.id=this.count
  this.Submitted=true;
  this.allData.push(this.myForm.value);
  if(this.allData.length > 0){
    this.showTable=true;
  }this.count++;
  }else{
    this.allData.forEach((element:any) => {
      if(this.myForm.id=element.id){
        element.uname=this.myForm.value.uname
        element.email=this.myForm.value.email
        element.pass=this.myForm.value.pass
      }
    });
  }
  }

  onDelete(data:any){
    this.allData.forEach((element:any,index:any) => {
      if(element.id==this.myForm.id){
        this.allData.splice(index,1)
      }
    })
  }

  onUpdate(data:any){
    this.idd=this.myForm.patchValue(this.idd)
    this.unm=this.myForm.patchValue(this.unm)
    this.eml=this.myForm.patchValue(this.eml)
    this.ps=this.myForm.patchValue(this.ps)

  }
}
