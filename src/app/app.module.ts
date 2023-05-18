import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoggerInterceptor } from './logger.interceptor';
import { HttpLoggerComponent } from './http-logger/http-logger.component';


@NgModule({
  declarations: [
    AppComponent,
    HttpLoggerComponent,
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:LoggerInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
