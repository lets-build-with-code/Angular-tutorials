import { Component } from '@angular/core';

@Component({
  selector: 'app-http-logger',
  templateUrl: './http-logger.component.html',
  styleUrls: ['./http-logger.component.scss']
})
export class HttpLoggerComponent {

  HttpLog:Array<any> = []

  constructor() {
  this.getHttpLogFromLocalStorage();
  }

  getHttpLogFromLocalStorage() {

    const localHttpLog:any = localStorage.getItem('http-logger');
    this.HttpLog = JSON.parse(localHttpLog)

  }

}
