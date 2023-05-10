import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform3',
  templateUrl: './reactiveform3.component.html',
  styleUrls: ['./reactiveform3.component.css']
})
export class Reactiveform3Component {

  public myForm:FormGroup;

  public allFormData:any[]=[];
  public showTable:boolean=false;
  public count: number = 1;
  constructor(private fb:FormBuilder){
    this.myForm=this.fb.group({
      id:[''],
      uname:[''],
      email:[''],
      gender:['']
    })    
  }
  onSubmitData(sub: any){
    sub.value.id=this.count;
    this.allFormData.push(this.myForm.value)
    this.count++
    if(this.allFormData.length >0){
      this.showTable=true;
    }
  }
  onDelete(del:any){
    this.allFormData.forEach((elem: any) => {
      if (elem.id == del.id) {
        this.allFormData.splice(this.allFormData.indexOf(elem), 1)
        console.log(del)
      }
    })
  }
 onEditData(edit:any){
    this.myForm.setValue(edit);
    console.log(edit);
  }
  updateData(upt:any){
    
  this.allFormData.splice(this.allFormData.indexOf(upt.value.id), 1, upt.value)
   console.log( upt.value)
  }
}
