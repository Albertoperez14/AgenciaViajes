import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ViajesService } from './viajes-service';
import { Router } from '@angular/router';

export const billeteGuardGuard: CanActivateFn = (route, state) => {
 const viajesService = inject(ViajesService);
  const router = inject(Router);

  if (viajesService.tieneBillete()) {
    return true;
  }

  alert('Necesitas comprar un billete para embarcar.');
  router.navigate(['/']);
  return false;
};