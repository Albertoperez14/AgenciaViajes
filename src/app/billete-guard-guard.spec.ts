import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { billeteGuardGuard } from './billete-guard-guard';

describe('billeteGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => billeteGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
