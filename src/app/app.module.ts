import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationComponent } from './operation/operation.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CrudService } from './crud.service';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question4Component } from './question4/question4.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { Question9Component } from './question9/question9.component';
import { Question10Component } from './question10/question10.component';
import { Question11Component } from './question11/question11.component';
import { Question12Component } from './question12/question12.component';
import { Question13Component } from './question13/question13.component';
import { Question14Component } from './question14/question14.component';
import { Question15Component } from './question15/question15.component';
import { Question16Component } from './question16/question16.component';
import { Question17Component } from './question17/question17.component';
import { Question18Component } from './question18/question18.component';
import { Question19Component } from './question19/question19.component';
import { Question20Component } from './question20/question20.component';
const routes=[
  {path:"get",component:OperationComponent},
  {path:"question1",component:Question1Component},
  {path:"question2",component:Question2Component},
  {path:"question3",component:Question3Component},
  {path:"question5",component:Question5Component},
  {path:"question6",component:Question6Component},
  {path:"question4",component:Question4Component},
  {path:"question7",component:Question7Component},
  {path:"question8",component:Question8Component},
  {path:"question9",component:Question9Component},
  {path:"question10",component:Question10Component},
  {path:"question11",component:Question11Component},
  {path:"question12",component:Question12Component},
  {path:"question13",component:Question13Component},
  {path:"question14",component:Question14Component},
  {path:"question15",component:Question15Component},
  {path:"question16",component:Question16Component},
  {path:"question17",component:Question17Component},
  {path:"question18",component:Question18Component},
  {path:"question19",component:Question19Component},
  {path:"question20",component:Question20Component},
  {path:"**",redirectTo:'/'}
]

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question5Component,
    Question6Component,
    Question4Component,
    Question7Component,
    Question8Component,
    Question9Component,
    Question10Component,
    Question11Component,
    Question12Component,
    Question13Component,
    Question14Component,
    Question15Component,
    Question16Component,
    Question17Component,
    Question18Component,
    Question19Component,
    Question20Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [CrudService,OperationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
