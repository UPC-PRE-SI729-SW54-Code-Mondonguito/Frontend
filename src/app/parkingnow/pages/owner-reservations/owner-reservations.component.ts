import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-reservations',
  templateUrl: './owner-reservations.component.html',
  styleUrls: ['./owner-reservations.component.css']
})
export class OwnerReservationsComponent implements OnInit {
  // Columnas visibles en la tabla
  displayedColumns: string[] = ['id', 'user', 'date', 'action'];

  // Lista de reservas
  reservations = [
    { id: 1, user: 'Juan Pérez', date: new Date('2024-10-10') },
    { id: 2, user: 'Ana García', date: new Date('2024-10-11') },
    { id: 3, user: 'Carlos Mendoza', date: new Date('2024-10-12') },
    { id: 4, user: 'Laura Rodríguez', date: new Date('2024-10-13') }
  ];

  // Lista filtrada que se mostrará en la tabla
  filteredReservations = [...this.reservations];

  // Filtros iniciales
  filter = {
    id: '',
    user: '',
    date: ''
  };

  constructor() {}

  ngOnInit(): void {}

  /**
   * Aplica los filtros ingresados en los campos de búsqueda
   */
  applyFilter(): void {
    this.filteredReservations = this.reservations.filter(reservation => {
      const matchesId = this.filter.id ? reservation.id.toString().includes(this.filter.id) : true;
      const matchesUser = this.filter.user
        ? reservation.user.toLowerCase().includes(this.filter.user.toLowerCase())
        : true;
      const matchesDate = this.filter.date
        ? new Date(this.filter.date).toDateString() === reservation.date.toDateString()
        : true;

      return matchesId && matchesUser && matchesDate;
    });
  }

  /**
   * Cancela una reserva específica por su ID
   * @param id - Identificador de la reserva a cancelar
   */
  cancelReservation(id: number): void {
    this.reservations = this.reservations.filter(reservation => reservation.id !== id);
    this.applyFilter(); // Aplica el filtro para reflejar el cambio en la lista visible
  }
}
