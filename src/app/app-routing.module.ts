import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { AdminToolsComponent } from './dashboard/admin-tools/admin-tools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NormalUserComponent } from './dashboard/normal-user/normal-user.component';
import { SuperAdminToolsComponent } from './dashboard/super-admin-tools/super-admin-tools.component';
import { SupervisorComponent } from './dashboard/supervisor/supervisor.component';
import { LoginComponent } from './login/login.component';
import { MatchGuard } from './match.guard';
import { SupervisorGuard } from './supervisor.guard';


const routes: Routes = [{
  path:'',component:LoginComponent
},
{
  path:'dashboard', component:DashboardComponent,
  canActivate:[AuthGuard],
  children : [
        {path : 'tools', component:SuperAdminToolsComponent, canMatch : [MatchGuard]},
        {path : 'tools', component:AdminToolsComponent, canMatch : [AdminGuard]},
        {path : 'tools', component:SupervisorComponent,  canMatch : [SupervisorGuard] },
        {path : 'tools', component:NormalUserComponent },

  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
