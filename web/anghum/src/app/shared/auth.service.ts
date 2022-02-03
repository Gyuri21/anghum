import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { }
  login(user: string,pass:string){
    let endpoint = 'login';
    let url = this.host + endpoint;
    let authData ={
      name: user,
      password: pass
    } 
    let data = JSON.stringify(authData);
    let headerObj = new HttpHeaders({
      'Content-Type':"application/json"
    });
    let header = {
      headers: headerObj
    }
    return this.http.post<any>(url,data,header);
  }
}
