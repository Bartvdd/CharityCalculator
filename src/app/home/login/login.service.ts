import { Injectable } from '@angular/core';
import { User } from '../../data/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}

)
export class LoginService {

  private _eventUrl = "api/users";

  constructor(private http: HttpClient) { }

  getUserByCredentials(username: string, password: string): Observable<User> {
    console.log("fetching data");
    return this.http.get<User>(this._eventUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
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
