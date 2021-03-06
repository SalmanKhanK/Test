import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Employe } from './employe';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient ) { }
  baseurl='http://localhost:3000';
  getMethod():Observable<Employe[]>{
           return this.http.get<Employe[]>(this.baseurl+'/object/')
           .pipe(
             retry(1),
             catchError(this.errorHandl)
           )
  }
 
 



  
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
