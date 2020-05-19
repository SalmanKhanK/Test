import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
   dataSr:DataService
  constructor( dataSr:DataService) {
    this.dataSr=dataSr
   }
  clicked=false
  value="5%";
  showNext;
  correct;
  wrong;
  coUnt;
 check;

 wrongans;
  nextBut(){
    return this.showNext=true;
  }
  ngOnInit(): void {
     
  }
  
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
       console.log("CorrectOPt",this.coUnt)
        
        
    }
    
    question;
    percentage;
    questionCount(){
     this.question=this.dataSr.quesCount();
     console.log("QuizC",this.question)
    
      }
      
    
}
