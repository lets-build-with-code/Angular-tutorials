import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperAdminToolsComponent } from './dashboard/super-admin-tools/super-admin-tools.component';
import { AdminToolsComponent } from './dashboard/admin-tools/admin-tools.component';
import { SupervisorComponent } from './dashboard/supervisor/supervisor.component';
import { NormalUserComponent } from './dashboard/normal-user/normal-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SuperAdminToolsComponent,
    AdminToolsComponent,
    SupervisorComponent,
    NormalUserComponent,
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
