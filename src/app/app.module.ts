import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { UserTaskComponent } from './dashboard/user-task/user-task.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    UserTaskComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
