import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {
public data:any;
public userData:any;
public formData:any= {
  name:"Shivnath Patil",
  email:"shivpatil0006@gnail.com",
  password:"12345678"
}

constructor(private st:DataService){
 this.submitFormData();
}

sData(){
  this.data=this.st.getStudentData();
}
userdata(){
  this.st.getUserdata().subscribe((abc:any)=>{
    this.userData=abc
    console.log(abc)
  },
  (err:any)=>{console.log(err)})

}

submitFormData() {
  this.st.postApiData(this.formData)
  .subscribe(
    (abc:any)=>{console.log(abc)},
    (err:any)=>{console.log(err)} 
  )
}

}
