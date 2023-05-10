import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform4',
  templateUrl: './reactiveform4.component.html',
  styleUrls: ['./reactiveform4.component.css']
})
export class Reactiveform4Component {


  allFormData: any[] = [];

  myForm: FormGroup;

  public ShowTable: boolean = false;

  public count: number = 0;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: [''],
      fname: [''],
      email: [''],
      gender: [''],
    })



  }

  onSubmitData(sub: any) {
    sub.value.id = this.count;

    this.allFormData.push(this.myForm.value)
    this.count++;
    if (this.allFormData.length > 0) {

      this.ShowTable = true;
    }

    console.log(sub.value)

  }


  DeleteRow(del: any) {

    this.allFormData.forEach((elem: any) => {

      if (elem.id == del.id) {
        this.allFormData.splice(this.allFormData.indexOf(elem), 1)

        console.log(del)
      }
    })
  }



  SideUpdate(upd: any) {



    this.myForm.setValue(upd);

    console.log(upd);

  }

  UpdateData(upt: any) {

    this.allFormData.splice(this.allFormData.indexOf(upt.value.id), 1, upt.value)

console.log( upt.value)


  }
}
