import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchGuard implements CanMatch {
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.showToolsForSuperAdmin();
  }

  showToolsForSuperAdmin():boolean {
    const usersDetails:any  = localStorage.getItem('loggedInUserDetails');

      // if(usersDetails !== null)
      console.log({usersDetails})
      const role = JSON.parse(usersDetails)[0].role;

      return role === 'super-admin' ? true : false;

      // if(role === 'super-admin') {
      //   return true;
      // } else if (role === 'admin') {
      //   return true;
      // } else {
      //   return false;
      // }

    }
}
