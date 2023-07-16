import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm !: FormGroup;

  constructor(private fb : FormBuilder, private httpRequest : HttpRequestService, private router : Router) {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })

  }


  login() {
    console.log(this.loginForm.value);

    this.httpRequest.getDetailsOfUserForEmailIsAvailableOrNot(this.loginForm.value).subscribe({
      next:(res) =>{
        console.log("res",res)
        if(res?.length) {
          localStorage.setItem('loggedInUserDetails',JSON.stringify(res));
          this.router.navigate(['dashboard']);
        }else {
          alert("Invalid username or password")
        }
       
      },

      error: (error) => {
        alert("500 Server error");
        console.log("error",error)
      }
    });
  }



}
