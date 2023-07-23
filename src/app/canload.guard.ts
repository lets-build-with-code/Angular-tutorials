import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanloadGuard implements CanLoad {
  isPrimeUser:boolean = false
  constructor(private router : Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem("loggedInUserDetails")?.length) {
     
        let userDetails:any = localStorage.getItem("loggedInUserDetails");
           this.isPrimeUser =  JSON.parse(userDetails)[0]?.isPrimeUser;
   
      }
      console.log("canLoad - init", "isPrimeUser : ", this.isPrimeUser)
      return (this.isPrimeUser)? this.isPrimeUser : this.router.navigate(['dashboard']);
  }
}
