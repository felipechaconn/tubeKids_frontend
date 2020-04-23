import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { User } from "../../model/User";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: "root",
})
export class UserAuthService {
  //propiedad para no escribir siempre la api
  API_URI = "http://localhost:3000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: number;

  constructor(private http: HttpClient, public router: Router) 
  {

  }

  registerUser(userData: User): Observable<User> {
    
    let api = `${this.API_URI}/auth/signup`;
    return this.http.post(api, userData).pipe(tap((res:any) => {
      localStorage.setItem('access_token',res.JwtToken);
    }),
      catchError(this.handleError));
  }

  // Sign-in
  login(user: User) {
    
    return this.http
      .post(`${this.API_URI}/auth/login`, user)
      .subscribe((res: any) => {
        console.log(res);
        this.currentUser = res.userId;
        this.router.navigate(["/twoFactor"]);
        // this.getUserProfile(res.userid).subscribe((res) => {
        //   
          
        // });
      });
  }

  twoFactorAuth(tokenVerify){
   let api = `${this.API_URI}/auth/verification/${this.currentUser}`;
    return this.http
    .post(api,tokenVerify)
    .subscribe((res: any) => {
      console.log('response',res);
      localStorage.setItem('access_token', res.JwtToken);
      this.router.navigate(["/dashboard/videos"]);
      // this.getUserProfile(res.userId).subscribe((res) => {
      //   this.currentUser = res.userId;
        
      // });
    });
  }

  

  public getToken() {
    return localStorage.getItem("access_token");
  }

  getDataUserFromToken() {
      const token = jwt_decode(this.getToken());
      let keys = Object.keys(token)
      let values = keys.map(k => token[k])
    return values;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }
  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  public getIdUserByEmail(): Observable<any> {
    const token=  this.getDataUserFromToken();
    const email= token[1];
    let api = `${this.API_URI}/user/emailUser/${email}`;
    return this.http.get(api, { headers: this.headers });

  }

  // User profile
  public getUserProfile(idUser: number): Observable<any> {
    let api = `${this.API_URI}/user/dataUser/${idUser}`;
    return this.http.get(api,{headers:this.headers});
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem("access_token");
    if (removeToken == null) {
      this.router.navigate(["explore"]);
    }
  }


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
    return throwError(
      'Something bad happened; please try again later.');
  };
}
