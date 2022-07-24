import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  userLogin(loginData: any) {
    return this.http.post("http://localhost:8080/user/login", loginData)
  }

  registerUser(user:any){
    return this.http.post("http://localhost:8080/user/add",user);
  }

  getToken(emailId:any){
    return this.http.get("http://localhost:8080/user/getToken/"+ emailId);
  }

  getUserRecordByToken(token:any){
    return this.http.get("http://localhost:8080/user/getrecordByToken/"+token)
  }
}
