import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrls: ['./question9.component.css']
})
export class Question9Component implements OnInit {

 
  dataSr:DataService
  constructor( dataSr:DataService) {
    this.dataSr=dataSr
   }

  clicked=false
  value="45%";
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
  per(){
    this.totalQuiz=this.dataSr.quesCount();
    console.log("TotalQuiz",this.totalQuiz)
    this.correctop=this.dataSr.a;
    console.log("correctOPt",this.correctop);
    this.percentage=(this.correctop/this.totalQuiz)*100;
    console.log("percentage",this.percentage)


}



}
