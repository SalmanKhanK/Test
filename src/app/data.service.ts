import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  correctopt="Correct";

    correctOpt(){
       return this.correctopt;
  }
  wrong=0;
  wrongOpt(){
    this.wrong=this.wrong+1;
    return "Sorry";
  }
  a=0;
  coun(){
   return  this.a=this.a+1;
    
  }
  count=0;
  quesCount(){
      return this.count=this.count+1;
  }
  per(){
      return (this.a/this.count)*100;
  }
  maxScore(){
    return (this.count/20)*100;
  }

}
