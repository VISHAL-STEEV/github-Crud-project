import { TestBed } from '@angular/core/testing';

import { GuardPropertyGuard } from './guard-property.guard';

describe('GuardPropertyGuard', () => {
  let guard: GuardPropertyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardPropertyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
