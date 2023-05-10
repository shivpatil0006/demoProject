import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-angula-revision',
  templateUrl: './angula-revision.component.html',
  styleUrls: ['./angula-revision.component.css']
})
export class AngulaRevisionComponent {

public name:string="Shivnath Shantilal Patil"
public age:number=17
public link:any;
public text:any;
public showText:boolean=true;
public country:any=["India","America","China","Russia"]
public selectCountry:any="America"
// constructor(){
//   if(this.age>18){
//     this.link="https://www.google.com"
//   }else{
//     this.link="https://www.wikipedia.com"
//   }
// }

// onClick(){
//   console.log("this is event binding")
// }

// onSubmitData(data1:any){

// }
public myForm:any;
public isSubmitted:boolean=false;
constructor(private fb:FormBuilder){
  this.myForm=this.fb.group({
     uname:['',Validators.required],
     email:[''],
     pass:['']
  })
}


onSubmitData(data1:any){
this.isSubmitted=true
}
}
