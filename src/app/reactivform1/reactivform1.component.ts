import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivform1',
  templateUrl: './reactivform1.component.html',
  styleUrls: ['./reactivform1.component.css']
})
export class Reactivform1Component {

public myForm:any;
public showData:boolean=false;
public allData:any=[];
public isSubmitted:boolean=false;

constructor(private fb:FormBuilder){
  this.myForm=this.fb.group({
    fname:['',[Validators.required]],
    lname:[''],
    email:[''],
    pass:[''],
  })
}


onSubmitData(){
  console.log("this is reactive form")
  console.log(this.myForm.value)
  this.isSubmitted=true
if(this.myForm.invalid){
  return alert ("Please fill all the data")
}else{
 //show data in table
 this.allData.push(this.myForm.value)
 if(this.allData.length>0){
   this.showData=true
 }
}

 
}

get f(){
  return this.myForm.controls
}
}
