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
  artesTipoB2 = false;
  socialesTipoA = false;
  socialesTipoB = false;
  socialesTipoB2 = false;
  tecTipoA = false;
  tecTipoB = false;
  tecTipoB2 = false;
  contador = 0;

  getCreditosActuales() {
    this.contador = 0;
    if (this.artesTipoA) {
      this.contador++;
    }
    if (this.artesTipoB) {
      this.contador++;
    }
    if (this.artesTipoB2) {
      this.contador++;
    }
    if (this.socialesTipoA) {
      this.contador++;
    }
    if (this.socialesTipoB) {
      this.contador++;
    }
    if (this.socialesTipoB2) {
      this.contador++;
    }
    if (this.tecTipoA) {
      this.contador++;
    }
    if (this.tecTipoB) {
      this.contador++;
    }
    if (this.tecTipoB2) {
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
      if (this.areaFaltante()) {
        return 2;
      }
      return 0;
    }
  }

  unoPorTipo() {
    if (this.artesCompleto() && this.socialesCompleto() && this.tecCompleto()) {
      return true;
    } else {
      return false;
    }
  }

  artesCompleto() {
    if (this.artesTipoA || this.artesTipoB || this.artesTipoB2) {
      return true;
    } else {
      return false;
    }
  }

  socialesCompleto() {
    if (this.socialesTipoA || this.socialesTipoB || this.socialesTipoB2) {
      return true;
    } else {
      return false;
    }
  }

  tecCompleto() {
    if (this.tecTipoA || this.tecTipoB || this.tecTipoB2) {
      return true;
    } else {
      return false;
    }
  }

  areaFaltante() {
    if (this.getCreditosActuales() === 0) {
      return ' cursos; 1 de Pensamiento Científico, 1 de Culturas, Artes y Humanidades';
    } else if (this.getCreditosActuales() <= 3) {
      if (this.artesCompleto()) {
        return ' cursos; 2 de Pensamiento Científico y 2 de cualquier área.';
       } else {
        return ' cursos; 1 de Culturas, Artes y Humanidades, 1 de Pensamiento Científico y 2 de cualquier área.';
       }
    } else if (this.getCreditosActuales() === 6) {
      // Necesita revisión
      if (this.artesCompleto()) {
          if (this.socialesCompleto() || this.tecCompleto()) {
            return ' cursos; 1 de Pensamiento Científico y 1 de cualquier área.';
          } else {
            return ' cursos; 2 de Pensamiento Científico.';
          }
      } else if (this.socialesCompleto() && this.tecCompleto()) {
        return ' cursos; 1 de Culturas, Artes y Humanidades y 1 de cualquier área.';
      } else if (this.socialesCompleto() || this.tecCompleto()) {
        return ' cursos; 1 de Culturas, Artes y Humanidades y 1 de Pensamiento Científico.';
      }
    } else if (this.getCreditosActuales() === 9) {
      if (this.unoPorTipo()) {
        return ' curso de cualquier área.';
      } else {
       if (this.artesCompleto()) {
        if (this.socialesCompleto() || this.tecCompleto()) {
          return ' curso de Pensamiento Científico';
        } else {
          return ' cursos de Pensamiento Científico';
        }
       } else if (this.socialesCompleto() && this.tecCompleto()) {
        return ' curso de Culturas, Artes y Humanidades.';
       } else {
        return ' cursos; 1 de Culturas, Artes y Humanidades y 1 de Pensamiento Científico.';
       }
      }
    } else if (this.getCreditosActuales() >= 12) {
      if (this.unoPorTipo()) {
        return false;
      } else {
       if (this.artesCompleto()) {
        return ' curso de Pensamiento Científico.';
       } else {
        return ' curso de Culturas, Artes y Humanidades.';
       }
      }
    }
  }

  cursosRestantes() {
    if (this.getCreditosActuales() === 0) {
      return 2;
    } else if (this.getCreditosActuales() <= 6) {
      return Math.floor(4 / (this.getCreditosActuales() / 3));
    } else if (this.getCreditosActuales() <= 9) {
      // dudas
      if (this.artesCompleto()) {
        if (this.socialesCompleto() || this.tecCompleto()) {
          return 1;
        } else {
          return 2;
        }
     } else if (this.socialesCompleto() && this.tecCompleto()) {
      return 1;
     } else {
      return 2;
     }
    } else if (!this.unoPorTipo()) {
      return 1;
    } else {
      return 0;
    }
  }

  limpiar () {
    this.artesTipoA = false;
    this.artesTipoB = false;
    this.artesTipoB2 = false;
    this.socialesTipoA = false;
    this.socialesTipoB = false;
    this.socialesTipoB2 = false;
    this.tecTipoA = false;
    this.tecTipoB = false;
    this.tecTipoB2 = false;
    this.contador = 0;
  }

}
