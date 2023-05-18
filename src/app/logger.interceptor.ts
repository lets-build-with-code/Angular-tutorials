import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqStatus  = '';
    let startTime = Date.now();
    

    
    return next.handle(request).pipe(
      tap({
        next: (event) => reqStatus = event instanceof HttpResponse ? 'Successfull':'',
        error: (error) => reqStatus = "failed"
 
      }),
      finalize(() => {
           const endTime = Date.now() - startTime;
           const msg = `Http Request : ${request.method} is ${reqStatus} with url of ${request.urlWithParams}, Time Taken : ${endTime}`;
           const logBody:any = {
            requestMethod : request.method,
            requestUrl : request.urlWithParams,
            requestStatus : reqStatus,
            requestTimeTaken : endTime
           }
           this.storeHttpLogInLocalStorage(logBody);
           console.log(msg);
      })
    );
  }

  storeHttpLogInLocalStorage(logBody:any) {
      let localHttpLogger:any = localStorage.getItem('http-logger');
      localHttpLogger = (localHttpLogger)? JSON.parse(localHttpLogger) : [];

      localHttpLogger.push(logBody);

      localStorage.setItem('http-logger',JSON.stringify(localHttpLogger))

  }
}
