import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserAuthService } from '../../../app/user/auth/user-auth.service';
import { Kid } from '../../../app/model/Kid';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KidService {
 //propiedad para no escribir siempre la api
 API_URI = "http://localhost:3000/api";
 headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(
    private http: HttpClient,
    private readonly _userService: UserAuthService
  ) { }

  addNewKid(kidData: Kid): Observable<Kid> {
    
    console.log(kidData.creator);
    let api = `${this.API_URI}/kid`;
    return this.http.post(api, kidData).pipe(
      tap((res: any) => {}),
      catchError(this.handleError)
    );
  }

  getKidById(kidId: number) {
    let api = `${this.API_URI}/kid/${kidId}`;
    return this.http
      .get(api, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  getKid(parentId: number) {
    let api = `${this.API_URI}/kid/parent/${parentId}`;
    return this.http
      .get(api, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  deleteVideo(idKid: string) {
    let api = `${this.API_URI}/kid/${idKid}`;
    return this.http.delete(api);
  }

  updateVideo(idKid: string | number, updatedKid: Kid): Observable<Kid> {
    let api = `${this.API_URI}/kid/${idKid}`;
    return this.http.put(api, updatedKid);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.statusText}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
