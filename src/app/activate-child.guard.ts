import { Injectable } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateChildGuard implements CanActivateChild {
  isPremiumUser:boolean = false
  constructor(private router : Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
   
    if(localStorage.getItem("loggedInUserDetails")?.length) {
     
      let userDetails:any = localStorage.getItem("loggedInUserDetails");
         this.isPremiumUser =  JSON.parse(userDetails)[0]?.isPremimumUser;
 
    }
    console.log("canActivateChild - init", "isPremimumUser : ", this.isPremiumUser)
    return (this.isPremiumUser)? this.isPremiumUser : this.router.navigate(['/dashboard']);
  }
  
}
