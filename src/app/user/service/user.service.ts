import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//propiedad para no escribir siempre la api
API_URI = "http://localhost:3000/api";
  constructor(
    private http: HttpClient
  ) { }
  
  validateUser(query: string){
    debugger
    const queryString =  query
    console.log('querystring',queryString)
    return this.http.get(`${this.API_URI}/user/verification/${queryString}`);
  }
}