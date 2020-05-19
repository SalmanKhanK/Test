import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question14',
  templateUrl: './question14.component.html',
  styleUrls: ['./question14.component.css']
})
export class Question14Component implements OnInit {

 
  dataSr:DataService
  constructor( dataSr:DataService) {
    this.dataSr=dataSr
   }

  clicked=false
  value="70%";
  showNext;
  coUnt;
  nextBut(){
    return this.showNext=true;
  }
  ngOnInit(): void {
  }
  correct;
  wrong;
    correctOpt(){
      return  this.correct=this.dataSr.correctOpt();
    }
    wrongOpt(){
     return this.wrong=this.dataSr.wrongOpt();
    }
    actionMethod(){
        return this.clicked = true;
    }
    count(){
      this.coUnt=this.dataSr.coun();
      console.log(this.coUnt);
  }
  question;
  questionCount(){
    // this.question=this.dataSr.quesCount();
    // console.log("Ques",this.question)
  }
  totalQuiz;
  correctop;
  percentage;
  check1;
  check2;
  check3;
  per(){
    this.totalQuiz=this.dataSr.quesCount();
    console.log("TotalQuiz",this.totalQuiz)
    this.correctop=this.dataSr.a;
    console.log("correctOPt",this.correctop);
    this.percentage=(this.correctop/this.totalQuiz)*100;
    console.log("percentage",this.percentage)
    if(this.percentage>=30 && this.percentage<=40){
      this.check1="check1"
  }
  if(this.percentage>40 && this.percentage<=50){
    this.check2="check2";
    this.check1="check1"
}
if(this.percentage>50){
  this.check1="check3";
  this.check2="check2";
  this.check3="check1";
}




}


}
