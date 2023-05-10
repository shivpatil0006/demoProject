import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-appservice',
  templateUrl: './appservice.component.html',
  styleUrls: ['./appservice.component.css']
})
export class AppserviceComponent {
public player1Data:any;
public player2Data:any;
public player3Data:any;

public userData:any;

public formData:any;

constructor(private user:ServiceService){
  // this.user.getUserData().subscribe((abc:any)=>{
  //   this.userData=abc
  // })
   this.submitFormData()
}

pl1Data(){
  this.player1Data=this.user.getp1Data()
}
pl2Data(){
  this.player2Data=this.user.getp2Data()
}
pl3Data(){
  this.player3Data=this.user.getp3Data()
}
allUserData(){
  this.user.getUserData().subscribe((data:any)=>{
    this.userData=data
    console.log(data)
  })
  
}
submitFormData(){
  this.formData={
    "email": "alex@karina.biz",
      "name": "Alex DuBuque",
      "phone":"024-648-3805",
      "username":"Alex.Stanton",
      "website":"alex.net"
  }
  this.user.postAPIData(this.formData)
  .subscribe(
    (abc:any)=>{console.log(abc)},
  )
}
}
  

