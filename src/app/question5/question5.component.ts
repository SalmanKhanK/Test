import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  dataSr:DataService
  constructor( dataSr:DataService) {
    this.dataSr=dataSr
   }

  clicked=false
  value="20%";
  showNext;
  coUnt;
  nextBut(){
    return this.showNext=true;
  }
  ngOnInit(): void {
  }
  correct;
  check;
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
    percentage;
    count(){
      this.coUnt=this.dataSr.coun();
      console.log("corrct",this.coUnt)
      
  }
  question;
  questionCount(){
    // this.question=this.dataSr.quesCount();
    // console.log("Ques",this.question)
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
    if(this.percentage>=25 && this.percentage<=35){
        this.check="check1"
    }
    if(this.percentage>=36 && this.percentage<=40){
      this.check="check2";
  }
  if(this.percentage>=41){
    this.check="check3";
}

}
}
