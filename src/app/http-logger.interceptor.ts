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
export class HttpLoggerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqStatus = '';
    let msg = '';
    let startTime =  Date.now()
    return next.handle(request).pipe( 
      tap({
          next: event => {
            return reqStatus = event instanceof HttpResponse ? 'Successful':''
          },
          error : error => {
            return reqStatus = 'Failed';
           }
      }),
      finalize(() => {
            const endTime = Date.now() - startTime;

            msg = `Http Request of ${request.method} with url ${request.urlWithParams}, Time Taken : ${endTime}`;
            console.log(msg);
      })
    );
  }
}
