
import { Component } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {

  customForm:FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required], this.asyncEmailValidator())
  });

  constructor(private httpReq : HttpRequestService) {}

  asyncEmailValidator() : AsyncValidatorFn {
    return (control:any): Observable<{[key:string]:boolean} | null> => {

      return this.httpReq.getDetailsOfUserForEmailIsAvailableOrNot().pipe(
        map((res:any) => {
          console.log("res : ", res, control.value)
          const isEmailAlreadyExist = res.filter((req:any) => req.email === control.value).length ? true : false;

          if(isEmailAlreadyExist) {
            console.log("email Exist : ", isEmailAlreadyExist)
            return {emailAlreadyExist:true}
          }

          return null;
        })
      )

    }

  }

  submitAge(){
    console.log("FormGroup : ", this.customForm, "Form Values : ", this.customForm.value)
  }
}
