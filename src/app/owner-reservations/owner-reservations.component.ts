import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-reservations',
  templateUrl: './owner-reservations.component.html',
  styleUrls: ['./owner-reservations.component.css']
})
export class OwnerReservationsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'user', 'date', 'action'];
  reservations = [
    { id: 1, user: 'Juan Pérez', date: new Date('2024-10-10') },
    { id: 2, user: 'Ana García', date: new Date('2024-10-11') },
    { id: 3, user: 'Carlos Mendoza', date: new Date('2024-10-12') },
    { id: 4, user: 'Laura Rodríguez', date: new Date('2024-10-13') }
  ];

  filteredReservations = this.reservations;
  filter = {
    id: '',
    user: '',
    date: ''
  };

  constructor() { }

  ngOnInit(): void {}

  applyFilter() {
    this.filteredReservations = this.reservations.filter(reservation => {
      const matchesId = this.filter.id ? reservation.id.toString().includes(this.filter.id) : true;
      const matchesUser = this.filter.user ? reservation.user.toLowerCase().includes(this.filter.user.toLowerCase()) : true;
      const matchesDate = this.filter.date ? new Date(this.filter.date).toDateString() === reservation.date.toDateString() : true;

      return matchesId && matchesUser && matchesDate;
    });
  }

  cancelReservation(id: number) {
    this.reservations = this.reservations.filter(reservation => reservation.id !== id);
    this.applyFilter();
  }
}
