import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }
  getAllUsers() {
    return this.httpClient.get<{ message: string, status: number, result: any }>(this.usersURL);

  }
  signup(user: any) {
    return this.httpClient.post<{ message: string }>(`${this.usersURL}/sginup`, user);
  }
  login(user) {
    return this.httpClient.post<{ message: string, result: any }>(`${this.usersURL}/login`,user);

  }
  // user: {firstName, lastName, email, pwd, confirmPwd}
 
}
