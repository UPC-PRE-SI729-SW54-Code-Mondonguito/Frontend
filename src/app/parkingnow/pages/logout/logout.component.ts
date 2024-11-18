import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor() {
    // Aquí podrías realizar la limpieza de datos, como cerrar sesión en el backend
    console.log('Sesión cerrada exitosamente.');
  }
}
