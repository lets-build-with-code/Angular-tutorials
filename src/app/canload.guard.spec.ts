import { TestBed } from '@angular/core/testing';

import { CanloadGuard } from './canload.guard';

describe('CanloadGuard', () => {
  let guard: CanloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
