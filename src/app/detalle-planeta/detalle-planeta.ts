import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViajesService } from '../viajes-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-detalle-planeta',
  styleUrl: './detalle-planeta.css',
  templateUrl: './detalle-planeta.html',
})
export class DetallePlaneta {
  private route = inject(ActivatedRoute);
  private viajesService = inject(ViajesService);
  private router = inject(Router)

  id = Number(this.route.snapshot.paramMap.get('id'));
  planeta = this.viajesService.buscarPlanetaPorId(this.id);

  comprar() {
  if (this.planeta) {
    this.viajesService.comprarBillete(this.planeta.id);
    this.router.navigate(['/embarque']);
  }
}

}
