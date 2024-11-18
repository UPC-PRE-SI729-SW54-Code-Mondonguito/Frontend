import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-owner',
  templateUrl: './dashboard-owner.component.html',
  styleUrls: ['./dashboard-owner.component.css']
})
export class DashboardOwnerComponent implements OnInit {
  ownerName: string = ''; // Nombre del dueño
  reservationsToday: number = 0; // Número de reservas de hoy
  spacesAvailable: number = 0; // Espacios disponibles

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Configura el idioma por defecto
  }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  /**
   * Cambiar idioma
   */
  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  /**
   * Cargar datos del dashboard (simulado)
   */
  loadDashboardData(): void {
    // Simula la carga de datos del backend
    setTimeout(() => {
      this.ownerName = 'Juan Pérez';
      this.reservationsToday = 15;
      this.spacesAvailable = 3;
    }, 1000);
  }
}
