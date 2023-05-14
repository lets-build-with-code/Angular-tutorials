import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const header = {"Authorization":"token","content-type":"application/json"};
    const params = {'interceptor' : 'interceptor added in our app'};
    const Cbody:any = request.body;
    const newBody = { ...Cbody, email:'nil by interceptor',number:'nil by interceptor', name:'interceptor modifed name'};
    const customRequest = request.clone({body: newBody, setHeaders:header, setParams:params});
    console.log(customRequest)

    return next.handle(customRequest);
  }
}
