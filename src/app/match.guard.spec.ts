import { TestBed } from '@angular/core/testing';

import { MatchGuard } from './match.guard';

describe('MatchGuard', () => {
  let guard: MatchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MatchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
