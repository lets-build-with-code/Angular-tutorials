import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactiveGuard } from './deactive.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path:'home',component: HomeComponent
},
{
  path:'user-details-form', component:DetailsComponent, canDeactivate: [DeactiveGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
