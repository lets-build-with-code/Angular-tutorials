import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       console.log("canActivate initialized");
    return this.checkUserIsLoggedInOrNot();
  }
  

  checkUserIsLoggedInOrNot():boolean {
  const isUserExist  = localStorage.getItem('loggedInUserDetails')?true:false;

      if(isUserExist === false) this.router.navigate([''])
    return isUserExist
  }
}
