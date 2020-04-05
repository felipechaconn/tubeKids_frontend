import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import {User} from '../model/User';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
//propiedad para no escribir siempre la api
API_URI = "http://localhost:3000/api";
  constructor(
    private http: HttpClient
  ) { }


  registerUser(userData: User): Observable<User> {
    return this.http.post(`${this.API_URI}/auth/signup`,userData);
  }

}
