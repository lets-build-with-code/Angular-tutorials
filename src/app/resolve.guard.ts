import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private http : HttpRequestService) {}
  userId!:string;
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("loggedInUserDetails")?.length) {
     
        let userDetails:any = localStorage.getItem("loggedInUserDetails");
           this.userId =  JSON.parse(userDetails)[0]?.id;
   
      }
      console.log("resove - init", "userId : ", this.userId)
    return  this.http.getUserRole(this.userId);
  }
  
}
