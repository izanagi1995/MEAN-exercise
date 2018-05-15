import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { PhonebookEntryModel } from './phonebook-entry-model';
import { tap, catchError, retry, first, map } from 'rxjs/operators';



const URL_PATH = `http://localhost:2000/api`;



@Injectable({
  providedIn: 'root'
})
export class PhonebookAPIService {

  constructor(private _http: HttpClient) {}

  // Base from Angular guides
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw(
      'Something bad happened; please try again later.');
  }

  getEntries(): Observable<Array<PhonebookEntryModel>> {
    return this._http.get<Array<PhonebookEntryModel>>(URL_PATH).pipe(
      retry(3), // If error, retry 3 times
      catchError(this.handleError)
    ).pipe(
      tap((x) => console.log('Before cast', x)),
      // First, map the observable and then map the array returned by the observable
      // Much work ! #Mapception
      map((result) => {
        return result.map(PhonebookEntryModel.fromJSON);
      }),
      tap((x) => console.log('After cast', x)),
    );
  }

  addEntry(model: PhonebookEntryModel): Observable<PhonebookEntryModel> {
    return this._http.post<PhonebookEntryModel>(URL_PATH, model.toObject()).pipe(
      retry(3), // If error, retry 3 times
      catchError(this.handleError),
      tap((x) => { // Tap allows us to have side effects without affecting the observable
        model._id = x._id;
      })
    ).pipe(
      tap((x) => console.log('Before cast', x)),
      map((result) => PhonebookEntryModel.fromJSON(result)),
      tap((x) => console.log('After cast', x)),
    );
  }

  getEntry(_id: string): Observable<PhonebookEntryModel> {
    return this._http.get<PhonebookEntryModel>(`${URL_PATH}/${_id}`).pipe(
      retry(3), // If error, retry 3 times
      catchError(this.handleError),
    ).pipe(
      tap((x) => console.log('Before cast', x)),
      map((result) => PhonebookEntryModel.fromJSON(result)),
      tap((x) => console.log('After cast', x)),
    );
  }

  editEntry(model: PhonebookEntryModel, _id: string): Observable<any> {
    return this._http.put(`${URL_PATH}/${_id}`, model.toObject()).pipe(
      retry(3), // If error, retry 3 times
    );
  }

  deleteEntry(_id: string): Observable<void> {
    return this._http.delete<void>(`${URL_PATH}/${_id}`).pipe(
      retry(3), // If error, retry 3 times
      catchError(this.handleError),
    );
  }
}
