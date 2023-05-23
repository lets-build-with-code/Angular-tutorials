import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http : HttpClient) { }


  createUser(formBody:any):Observable<any> {

    const url = "http://localhost:3000/user-details";

    return this.http.post<any>(url, formBody);

  }
}
