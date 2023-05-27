

import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpRequestService } from './http-request.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})


export class AppComponent {

  loginFormGroup! : FormGroup;
  addrFormGroup: FormGroup = new FormGroup({
    street : new FormControl(''),
    city : new FormControl(''),
    zipcode : new FormControl(''),

  })

  constructor(){
      this.loginFormGroup = new FormGroup({
        email : new FormControl('ss@test.com'),
        password : new FormControl('1234'),
        address : this.addrFormGroup
      })
  }

  login() {
    const emailMatch = this.loginFormGroup.value.email.split('@')[1];
    if(emailMatch === 'abc.com') {
      this.loginFormGroup.removeControl('address');
    }

    console.log("form group : ", this.loginFormGroup, "From Values :", this.loginFormGroup.value);
  }

}
