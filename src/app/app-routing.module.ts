import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateChildGuard } from './activate-child.guard';
import { AuthGuard } from './auth.guard';
import { CanloadGuard } from './canload.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './dashboard/user-profile/user-profile.component';
import { UserTaskComponent } from './dashboard/user-task/user-task.component';
import { LoginComponent } from './login/login.component';
import { ResolveGuard } from './resolve.guard';


const routes: Routes = [{
  path:'',component:LoginComponent
},
{
  path:'dashboard', component:DashboardComponent,
  resolve: {
    resolvedData : ResolveGuard
  },
  canActivate:[AuthGuard],
  canActivateChild:[ActivateChildGuard],
  children : [
    {path:'user-profile', component:UserProfileComponent},
    {path:'user-task', component:UserTaskComponent},
    {path:'user-prime-feature',
    canLoad : [CanloadGuard],
    loadChildren : () => import('./dashboard/prime-feature/prime-feature.module').then((m) => m.PrimeFeatureModule)
  }

  ]
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
