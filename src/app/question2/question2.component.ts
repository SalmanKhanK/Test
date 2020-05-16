import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  constructor() { }

  clicked=false
  value="5%";
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
