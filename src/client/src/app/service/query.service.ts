import { Injectable } from '@angular/core';
import { Match } from './match';
import { catchError,  map, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  API: string = "http://localhost:8000/api";

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  QueryMatches(term: string): Observable<Match[]> {
    if (!term.trim()) {
      return of([]);
    }

    let URL = `${this.API}/matches/${term}`;
    return this.httpClient.get<Match[]>(URL, {headers: this.httpHeaders})
    .pipe(
      tap(rets => console.log('RESULTS: ' + rets)),
      catchError(this.handleError));
  }


  // Common Error Handler
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
