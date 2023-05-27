
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {

  loginFormGroup! : FormGroup;
  addrFormGroup: FormGroup = new FormGroup({
    street : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
    city : new FormControl('',Validators.required),
    zipcode : new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),

  })
  constructor(){
      this.loginFormGroup = new FormGroup({
        email : new FormControl('',[Validators.required,Validators.email]),
        password : new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(10)]),
        address : this.addrFormGroup
      })
  }

  login() {
    console.log("form group : ", this.loginFormGroup, "From Values :", this.loginFormGroup.value);
  }
}

