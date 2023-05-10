import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Binding2Component } from './binding2/binding2.component';
import { Directives1Component } from './directives1/directives1.component';
import { RevisionAngularComponent } from './revision-angular/revision-angular.component';
import { Templateform1Component } from './templateform1/templateform1.component';
import { PipeComponent } from './pipe/pipe.component';
import { Reactivform1Component } from './reactivform1/reactivform1.component';
import { Templateform2Component } from './templateform2/templateform2.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { Templateform3Component } from './templateform3/templateform3.component';
import { Reactiveform3Component } from './reactiveform3/reactiveform3.component';
import { Reactiveform4Component } from './reactiveform4/reactiveform4.component';
import { AngulaRevisionComponent } from './angula-revision/angula-revision.component';
import { AppserviceComponent } from './appservice/appservice.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDataComponent } from './student-data/student-data.component';
import { App1Component } from './myservice/app1/app1.component';
import { App2Component } from './myservice/app2/app2.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { MyCrudComponent } from './my-crud/my-crud.component';
import { App3Component } from './myservice/app3/app3.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Binding2Component,
    Directives1Component,
    RevisionAngularComponent,
    Templateform1Component,
    PipeComponent,
    Reactivform1Component,
    Templateform2Component,
    Reactiveform2Component,
    Templateform3Component,
    Reactiveform3Component,
    Reactiveform4Component,
    AngulaRevisionComponent,
    AppserviceComponent,
    StudentDataComponent,
    App1Component,
    App2Component,
    RxjsOperatorsComponent,
    MyCrudComponent,
    App3Component,
   

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
