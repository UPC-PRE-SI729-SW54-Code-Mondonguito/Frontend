import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  // Define la variable 'lugares' como un arreglo de objetos
  lugares = [
    { nombre: 'Lima Centro - Cerca de la playa', seleccionado: false },
    { nombre: 'Miraflores - Parque Kennedy', seleccionado: false },
    { nombre: 'Barranco - Estacionamiento Central', seleccionado: false }
  ];

  // Función que maneja el cambio en los lugares favoritos
  onFavoriteChange(index: number): void {
    this.lugares[index].seleccionado = !this.lugares[index].seleccionado;
    console.log(`Lugar favorito cambiado: ${this.lugares[index].nombre}, seleccionado: ${this.lugares[index].seleccionado}`);
  }
}
