import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  userDetails:any 
  constructor(private router : Router) {

    if(localStorage.getItem("loggedInUserDetails")?.length) {
      this.userDetails = localStorage.getItem("loggedInUserDetails");
      this.userDetails = JSON.parse(this.userDetails)
 
    }
   
  }


  logout() {
    localStorage.removeItem("loggedInUserDetails");

    this.router.navigate(['']);
  }

}
