import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminToolsComponent } from './super-admin-tools.component';

describe('SuperAdminToolsComponent', () => {
  let component: SuperAdminToolsComponent;
  let fixture: ComponentFixture<SuperAdminToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
