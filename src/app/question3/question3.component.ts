import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  constructor() { }
  clicked=false
  value="10%";
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
