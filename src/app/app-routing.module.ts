import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpLoggerComponent } from './http-logger/http-logger.component';


const routes: Routes = [{
  path:'http-logger', component:HttpLoggerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
