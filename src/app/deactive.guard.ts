import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsComponent } from './details/details.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<DetailsComponent> {
  canDeactivate(
    component: DetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log("deactivate -> isFormDirty : ", component.isFormDirty)
      if(component.isFormDirty) {
        return window.confirm("Are you sure to leave the page ? You have some data in the Form's Field");
      }
      return true;
  }
  
}
