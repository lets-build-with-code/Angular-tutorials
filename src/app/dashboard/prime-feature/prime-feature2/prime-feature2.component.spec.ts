import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFeature2Component } from './prime-feature2.component';

describe('PrimeFeature2Component', () => {
  let component: PrimeFeature2Component;
  let fixture: ComponentFixture<PrimeFeature2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFeature2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
