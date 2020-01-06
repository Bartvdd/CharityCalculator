import { Injectable } from '@angular/core';
import { Event } from './event';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}

)
export class EventService {

  private _eventUrl = "api/events";

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    console.log("fetching data");
    return this.http.get<Event[]>(this._eventUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }


  getEvent(id: number): Observable<Event> {
    const url = `${this._eventUrl}/${id}`;
    return this.http.get<Event>(url);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message} + ${err.url}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
