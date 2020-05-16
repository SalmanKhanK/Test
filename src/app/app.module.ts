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
const routes=[
  {path:"get",component:OperationComponent},
  {path:"question1",component:Question1Component},
  {path:"question2",component:Question2Component},
  {path:"question3",component:Question3Component},
  {path:"question5",component:Question5Component},
  {path:"question6",component:Question6Component},
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
    Question6Component
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
