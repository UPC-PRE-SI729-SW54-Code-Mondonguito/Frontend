import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core'; // Importa el servicio para traducir

import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

export enum VehicleType {
  Car = 'Car',
  Motorcycle = 'Motorcycle',
  Truck = 'Truck'
}

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservationForm: FormGroup;
  parkingReservations: any[] = [];
  currentLanguage: string = 'es'; // Idioma por defecto

  // Lista de tipos de vehículos para usar en el select
  vehicleTypes = Object.values(VehicleType);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog,
    private translate: TranslateService // Inyecta el servicio de traducción
  ) {
    this.reservationForm = this.fb.group({
      vehicleRegistration: ['', Validators.required],
      typeOfVehicle: ['', Validators.required],
      reservationTime: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getReservations();
    this.translate.setDefaultLang(this.currentLanguage); // Establece el idioma por defecto
    this.translate.use(this.currentLanguage); // Aplica el idioma por defecto
  }

  // Función para cambiar el idioma
  setLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.use(language); // Cambia el idioma dinámicamente
  }

  getReservations() {
    this.http.get('http://localhost:3000/parkingReservations').subscribe((data: any) => {
      this.parkingReservations = data;
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const newReservation = this.reservationForm.value;
      this.http.post('http://localhost:3000/parkingReservations', newReservation).subscribe(() => {
        this.getReservations();
        this.reservationForm.reset();
      });
    } else {
      alert(this.translate.instant('RESERVATIONS.FORM_INCOMPLETE')); // Mensaje si el formulario está incompleto
    }
  }

  deleteReservation(id: number) {
    this.http.delete(`http://localhost:3000/parkingReservations/${id}`).subscribe(() => {
      this.getReservations();
    });
  }

  openPaymentModal() {
    const dialogRef = this.dialog.open(PaymentModalComponent, {
      width: '400px',
      data: { totalAmount: 'S/ 50.00' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        alert(this.translate.instant('RESERVATIONS.PAYMENT_SUCCESS')); // Mensaje de éxito traducido
      }
    });
  }
}
