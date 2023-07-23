import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeFeature1Component } from './prime-feature1/prime-feature1.component';
import { PrimeFeature2Component } from './prime-feature2/prime-feature2.component';

const routes: Routes = [{
  path:'', component:PrimeFeature1Component
},
{path:'user-prime-feature2', component:PrimeFeature2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeFeatureRoutingModule { }
