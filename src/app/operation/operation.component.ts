import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    
     

  }
 
  // getMethod(){
  //   for(var i=0;i<=this.gett.length;i++){
         
  //   }
  // }

}
