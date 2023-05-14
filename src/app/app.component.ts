
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
   this.getUserRefresh();
  }

  submitUsersData() {

    this.httpRequest.createUsers().subscribe({next : res => {
      console.log("data : APP TS File", res);
      this.getUserRefresh()
    },
    error: error => {
      console.log("error :  APP TS File ", error)
    }
  }
    )
  }

  getUserRefresh() {
    this.httpRequest.getUsers().subscribe(res => {
      console.log(res);
      this.userData = res;
    })
  }


}
