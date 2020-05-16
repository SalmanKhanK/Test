import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.css']
})
export class Question6Component implements OnInit {

  constructor() { }

  clicked=false
  value="20%";
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
