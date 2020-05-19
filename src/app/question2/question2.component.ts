import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  dataSr:DataService
  constructor( dataSr:DataService) {
    this.dataSr=dataSr
   }

  clicked=false
  value="10%";
  showNext;
  coUnt;
  check;
  wrongans;
  nextBut(){
    return this.showNext=true;
  }
  ngOnInit(): void {
    
  }
  correct;
  wrong;
  correctAns;

  correctOpt(){
    this.correct=this.dataSr.correctOpt();
   
}

 wrongOpt(){
  this.wrong=this.dataSr.wrongOpt();
  this.wrongans=this.dataSr.wrong;
  console.log("wrong",this.wrongans);
 }
 actionMethod(){
     return this.clicked = true;
 }
 count(){
  
    this.coUnt=this.dataSr.coun();
    console.log("correctOpt",this.coUnt)
     
     
 }
 
 question;
 percentage;
 questionCount(){
  // this.question=this.dataSr.quesCount();
  // console.log("QuizC",this.question)
 
   }
   totalQuiz;
   correctop;
   per(){
    this.totalQuiz=this.dataSr.quesCount();
    console.log("TotalQuiz",this.totalQuiz)
    this.correctop=this.dataSr.a;
    console.log("correctOPt",this.correctop);
     this.percentage=(this.correctop/this.totalQuiz)*100;
    console.log("percentage",this.percentage)
}

   
}
