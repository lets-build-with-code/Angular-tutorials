import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLoggerComponent } from './http-logger.component';

describe('HttpLoggerComponent', () => {
  let component: HttpLoggerComponent;
  let fixture: ComponentFixture<HttpLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpLoggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
