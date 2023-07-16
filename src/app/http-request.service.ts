import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient : HttpClient) { }

  getDetailsOfUserForEmailIsAvailableOrNot(loginDetails:any): Observable<any> {
    const username = loginDetails.username;
    const password = loginDetails.password;
    const url = `http://localhost:3000/users?email=${username}&password=${password}`;
      return this.httpClient.get<any>(url)
  }
}
