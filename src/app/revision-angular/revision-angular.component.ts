import { Component } from '@angular/core';

@Component({
  selector: 'app-revision-angular',
  templateUrl: './revision-angular.component.html',
  styleUrls: ['./revision-angular.component.css']
})
export class RevisionAngularComponent {


  public formData:any=[];
  public showTable:boolean=false



  submitData(data:any){
    console.log(data)
    this.formData.push(data.value)
    if(this.formData.length>0){
       this.showTable=true;
      
    }


    

  }
}
