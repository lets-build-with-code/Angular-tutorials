import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient : HttpClient) { }

  getDetailsOfUserForEmailIsAvailableOrNot(): Observable<any> {
    const url = "http://localhost:3000/user-details";
      return this.httpClient.get<any>(url)
  }
}
