import { Injectable } from '@angular/core';
import { User } from '../../data/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}

)
export class LoginService {

  private _eventUrl = "api/users";
  private _user: User;
  get user(): User {
    return this._user;
  }
  private setuser(value) {
    this._user = value;
  }

  errorMessage: string;

  constructor(private http: HttpClient) { }

  getUserByCredentials(username: string, password: string) {
    console.log("fetching userdata");
    this.http.get<User>(this._eventUrl).pipe(
      filter(users => users.userName === username && users.userPassword === password),
      catchError(this.handleError)).subscribe(user => this.setuser(user));
    console.log("user in loginservice is:" + this._user);
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

  getLoggedInUser() : User {
    return this.user;
  }
}
