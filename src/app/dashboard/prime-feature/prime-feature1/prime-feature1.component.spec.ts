import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFeature1Component } from './prime-feature1.component';

describe('PrimeFeature1Component', () => {
  let component: PrimeFeature1Component;
  let fixture: ComponentFixture<PrimeFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFeature1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
