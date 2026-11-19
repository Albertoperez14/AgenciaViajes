import { Service } from '@angular/core';

@Service()
export class ViajesService {
    planetas = [
    {
      id: 1,
      nombre: 'Marte',
      emoji: '🔴',
      distancia: '225 millones de km',
      precio: 1500
    },
    {
      id: 2,
      nombre: 'Europa (luna de Júpiter)',
      emoji: '🧊',
      distancia: '628 millones de km',
      precio: 4200
    },
    {
      id: 3,
      nombre: 'Titán',
      emoji: '🪐',
      distancia: '1.200 millones de km',
      precio: 6800
    },
    {
      id: 4,
      nombre: 'Kepler-22b',
      emoji: '🌍',
      distancia: '600 años luz',
      precio: 25000
    }
  ];

  private billete: typeof this.planetas[number] | undefined = undefined;


  buscarPlanetaPorId(id: number) {
    return this.planetas.find(planeta => planeta.id === id);
  }

  comprarBillete(id: number) {
    const planeta = this.buscarPlanetaPorId(id);
    if (planeta) {
      this.billete = planeta;
      
    }
  }

  tieneBillete(){
    if(this.billete==undefined){
      return false;
    }
    return true
  }

  verBillete(){
    return this.billete
    
  }

  anularBillete(){
    this.billete=undefined;
  }
}
