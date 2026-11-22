import { Component, inject } from '@angular/core';
import { ViajesService } from '../viajes-service';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-planetas',
  styleUrl: './planetas.css',
  templateUrl: './planetas.html',
})
export class Planetas {
  private viajesService = inject (ViajesService);

  get planetas(){
    return this.viajesService.planetas;
  }
}
