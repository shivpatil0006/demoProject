import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent {
 public arr1:any=[1,2,3,4,5,6,7];
 public observable:any;

 constructor(){
  this.observable=from(this.arr1)
  // this.observable.subscribe((res:any)=>{console.log(res)})

  // this.observable=of(10,12,13,15,16, "Helloo")
  // this.observable.subscribe((abc:any)=>{console.log(abc)})

  this.observable.pipe(
    map((x:any)=>x+2),
    filter((y:any)=>y>6)
  ).subscribe((xyz:any)=>{console.log(xyz)})
 }
}
