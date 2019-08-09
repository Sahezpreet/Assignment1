import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  saveUserDetails(data,url) :Observable<any>{
    const headers= new HttpHeaders().set('Content-Type', 'application/json');
    const URL='http://127.0.0.1:5050'+url;
    console.log(URL)
    return this.http.post<any>(URL,data,{headers}).pipe(catchError(this.handleError));
  }

  savecontactDetails(data,url) :Observable<any>{
    const headers= new HttpHeaders().set('Content-Type', 'application/json');
    const URL='http://127.0.0.1:5050'+url;
    return this.http.post<any>(URL,data,{headers}).pipe(catchError(this.handleError));
  }

  saveacademicDetails(data,url) :Observable<any>{
    const headers= new HttpHeaders().set('Content-Type', 'application/json');
    const URL='http://127.0.0.1:5050'+url;
    return this.http.post<any>(URL,data,{headers}).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      return throwError('Client side error');
    }
    else {
      return throwError('Server side error')
    }
  }

}
