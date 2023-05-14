import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http : HttpClient) { }

  getUsers():Observable<[Users]> {

    const url ="http://localhost:3000/users";
    // const headers = { 'content-type': 'application/json'};
    // const HttpParams = {'record-type':'json','description':'user api'};
    return this.http.get<[Users]>(url)
  
  }

  createUsers():Observable<Users> {
    const url ="http://localhost:3000/users";
    // const headers = { 'content-type': 'application/json'};
    // const HttpParams = {'record-type':'json','operation-type':'post','record-created-info':'users'};

    const Samplebody:Users = {
      role: "ROLECUSTOMER",
      name: "Robert Gonzalez",
      email: "robertgonzalez@gmail.com",
      number: "7729248883",
      password: "$2b$10$VNrU4oX2aqRYQDQsecpTiO37oQZTnVE43JFKXQXCDWHq2PcVWHz9e",
      createdAt: "2021-08-31T15:18:41.876Z",
      updatedAt: "2022-12-19T16:37:26.174Z",
      lastLoginAt: "2022-12-19T16:37:26.173Z"
    }
    return this.http.post<Users>(url,Samplebody)


  }

  updateUsersByPut(body:Users):Observable<Users> {
    const url ="http://localhost:3000/users/612e4851345dcc333ac6cb24";
    const headers = { 'content-type': 'application/json'};
    const HttpParams = {'record-type':'json','operation-type':'put','record-updated-info':'users'};
    const email = {email: body.email}
    return this.http.put<Users>(url,email, {headers:headers, params:HttpParams} )
  }


  updateUserByPatch(body:Users):Observable<Users> {
    const url ="http://localhost:3000/users/612e4851345dcc333ac6cb24";
    const headers = { 'content-type': 'application/json'};
    const HttpParams = {'record-type':'json','operation-type':'patch','record-updated-info':'users'};
     const email = {email: body.email}
    return this.http.patch<Users>(url,email,{headers: headers, params: HttpParams})

  }

  deleteUser(id:any):Observable<string> {

    const url =`http://localhost:3000/users/${id}`;
    const headers = { 'content-type': 'application/json'};
    const HttpParams = {'record-type':'json','operation-type':'delete','record-updated-info':'users'};

    return this.http.delete<string>(url, {headers: headers, params: HttpParams})
  }

}
