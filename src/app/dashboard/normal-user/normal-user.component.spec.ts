import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalUserComponent } from './normal-user.component';

describe('NormalUserComponent', () => {
  let component: NormalUserComponent;
  let fixture: ComponentFixture<NormalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
