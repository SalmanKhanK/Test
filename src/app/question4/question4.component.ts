import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {
  dataSr:DataService
  constructor( dataSr:DataService) {
    this.dataSr=dataSr
   }
  clicked=false
  value="30%";
  showNext;
  correct;
  wrong;
  coUnt;
  nextBut(){
    return this.showNext=true;
  }
  ngOnInit(): void {
    
  }
  
  correctOpt(){
        return this.correct=this.dataSr.correctOpt();
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


}
   
  
}
