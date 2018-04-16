import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cambiosCBU2018';
  artesTipoA = false;
  artesTipoB = false;
  socialesTipoA = false;
  socialesTipoB = false;
  tecTipoA = false;
  tecTipoB = false;
  contador = 0;

  getCreditosActuales() {
    this.contador = 0;
    if (this.artesTipoA) {
      this.contador++;
    }
    if (this.artesTipoB) {
      this.contador++;
    }
    if (this.socialesTipoA) {
      this.contador++;
    }
    if (this.socialesTipoB) {
      this.contador++;
    }
    if (this.tecTipoA) {
      this.contador++;
    }
    if (this.tecTipoB) {
      this.contador++;
    }

    this.contador = this.contador * 3;
    return this.contador;
  }

  getCreditosFaltantes() {
    if (this.getCreditosActuales() <= 9) {
      return (this.cursosRestantes() * 2) + 4;
    } else if (this.getCreditosActuales() === 12) {
      return 2;
    } else {
      return 0;
    }
  }

  unoPorTipo() {
    if ((this.artesTipoA || this.artesTipoB) && (this.socialesTipoA || this.socialesTipoB) && (this.tecTipoA || this.tecTipoB)) {
      return true;
    } else {
      return false;
    }
  }

  cursosRestantes() {
    if (this.getCreditosActuales() <= 6) {
      return Math.floor(4 / (this.getCreditosActuales() / 3));
    } else if (this.getCreditosActuales() <= 9 && !this.unoPorTipo()) {
      // Y si tengo un curso de cada área entonces 0?
      return 1;
    } else {
      return 0;
    }
  }

}
