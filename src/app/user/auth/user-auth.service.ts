import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class UserAuthService {
  //propiedad para no escribir siempre la api
  API_URI = "http://localhost:3000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) 
  {

  }

  registerUser(userData: User): Observable<User> {
    debugger
    let api = `${this.API_URI}/auth/signup`;
    return this.http.post(api, userData).pipe(tap((res:any) => {
      console.log(res.JwtToken);
      localStorage.setItem('access_token',res.JwtToken);
    }),
      catchError(this.handleError));
  }

  // Sign-in
  login(user: User) {
    debugger
    return this.http
      .post(`${this.API_URI}/auth/login`, user)
      .subscribe((res: any) => {
        debugger
        console.log(res.JwtToken)
        localStorage.setItem('access_token', res.JwtToken);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(["dashboard/" + res.msg._id]);
        });
      });
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.http}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem("access_token");
    if (removeToken == null) {
      this.router.navigate(["log-in"]);
    }
  }
  // Handle Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
