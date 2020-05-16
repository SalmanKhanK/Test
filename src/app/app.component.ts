import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getting=[];
  visible=true
   isButtonVisible(){
     return this.visible=false
   }
      
}
