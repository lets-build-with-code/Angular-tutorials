
import { Component } from '@angular/core';
import { RouteConfigLoadStart } from '@angular/router';
import { HttpRequestsService } from './http-requests.service';
import { Users } from './users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})


export class AppComponent {

  userData: any


  constructor(private httpRequest: HttpRequestsService) {
      this.getUserRefresh()
  }

  submitUsersData() {

    this.httpRequest.createUsers().subscribe()
    this.getUserRefresh()
  }

  getUserRefresh() {
   this.httpRequest.getUsers().subscribe(res => {
    this.userData = res;
   })
  }


}
