import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bloquepageGuard } from './bloquepage.guard';

describe('bloquepageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bloquepageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
