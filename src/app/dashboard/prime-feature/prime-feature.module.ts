import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeFeatureRoutingModule } from './prime-feature-routing.module';
import { PrimeFeature1Component } from './prime-feature1/prime-feature1.component';
import { PrimeFeature2Component } from './prime-feature2/prime-feature2.component';


@NgModule({
  declarations: [
    PrimeFeature1Component,
    PrimeFeature2Component
  ],
  imports: [
    CommonModule,
    PrimeFeatureRoutingModule
  ]
})
export class PrimeFeatureModule { }
