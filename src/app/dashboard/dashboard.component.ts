import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  userDetails:any 
  role!:string;
  constructor(private router : Router, private route : ActivatedRoute) {

    if(localStorage.getItem("loggedInUserDetails")?.length) {
      this.userDetails = localStorage.getItem("loggedInUserDetails");
      this.userDetails = JSON.parse(this.userDetails)
 
    }
   
  }

ngOnInit(): void {
  // console.log("Dashboard -> resolvedData : ", this.route.snapshot.data['resolvedData'])
}
  logout() {
    localStorage.removeItem("loggedInUserDetails");

    this.router.navigate(['']);
  }

}
