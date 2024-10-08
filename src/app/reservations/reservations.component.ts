import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservationForm: FormGroup;
  parkingReservations: any[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.reservationForm = this.fb.group({
      vehicleRegistration: ['', [Validators.required]],
      typeOfVehicle: ['', [Validators.required]],
      reservationTime: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.getReservations();
  }

  // Obtener las reservaciones actuales
  getReservations() {
    this.http.get('http://localhost:3000/parkingReservations').subscribe((data: any) => {
      this.parkingReservations = data;
    });
  }

  // Enviar nueva reservación
  onSubmit() {
    if (this.reservationForm.valid) {
      const newReservation = this.reservationForm.value;
      this.http.post('http://localhost:3000/parkingReservations', newReservation).subscribe(() => {
        this.getReservations(); // Actualiza la lista después de agregar
        this.reservationForm.reset(); // Reinicia el formulario
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  // Eliminar una reservación
  deleteReservation(id: number) {
    this.http.delete(`http://localhost:3000/parkingReservations/${id}`).subscribe(() => {
      this.getReservations(); // Actualiza la lista después de eliminar
    });
  }
}
