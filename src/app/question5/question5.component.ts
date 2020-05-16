import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  constructor() { }

  clicked=false
  value="15%";
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
