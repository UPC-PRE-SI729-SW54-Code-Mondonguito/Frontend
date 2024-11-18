import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-owner',
  templateUrl: './dashboard-owner.component.html',
  styleUrls: ['./dashboard-owner.component.css']
})
export class DashboardOwnerComponent {
  ownerName: string = 'Nombre del Dueño';  // Añade una variable para el nombre del dueño

  constructor() {
    // Puedes cargar el nombre del dueño desde un servicio o una API
  }
}
