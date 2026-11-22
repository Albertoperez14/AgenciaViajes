import { Component,inject } from '@angular/core';
import { ViajesService } from '../viajes-service';
import { Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-embarque',
  styleUrl: './embarque.css',
  templateUrl: './embarque.html',
})
export class Embarque {
  private viajesService = inject(ViajesService);
  private router = inject(Router);

get billete() {
  return this.viajesService.verBillete();
}
despegar() {
  alert('Despegue');
  this.viajesService.anularBillete();
  this.router.navigate(['/']);
}
anularBillete() {
  this.viajesService.anularBillete();
  this.router.navigate(['/']);
}
}
