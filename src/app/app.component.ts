

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpRequestService } from './http-request.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})


export class AppComponent {

  userFormInput = {
    email:'',
    password:'',
    address:'',
    city:'',
    zip:''
  }
  isFormSubmittedSuccessfully:boolean = false

  constructor(private httpRequest : HttpRequestService) {

  }
  submitUserDetail(userForm:NgForm) {
    console.log("form : ", userForm.form.value, userForm);

    this.httpRequest.createUser(userForm.form.value).subscribe({
      next:res =>{ console.log(res)
        this.isFormSubmittedSuccessfully = true;
         userForm.resetForm();
         setTimeout(()=> {
          this.isFormSubmittedSuccessfully = false
         },2000)
      },
      error:err => console.log(err)
    })

  }

}
