import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}

)
export class TaxRateService {

  private _eventUrl = "api/taxrate";

  constructor(private http: HttpClient) { }

  getTaxRate(): Observable<number> {
    console.log("fetching data");
    return this.http.get<number>(this._eventUrl).pipe(
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
