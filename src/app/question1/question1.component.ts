import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  constructor() { }
  clicked=false
  value="0%";
  showNext;
  nextBut(){
    return this.showNext=true;
  }
  ngOnInit(): void {
  }
  correct;
  wrong;
    correctOpt(){
      return  this.correct="Correct!"
    }
    wrongOpt(){
     return this.wrong="Sorry";
    }
    actionMethod(){
        return this.clicked = true;
    }
}
