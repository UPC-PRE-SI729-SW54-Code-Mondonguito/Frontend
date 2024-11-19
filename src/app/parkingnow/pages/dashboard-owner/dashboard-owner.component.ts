import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-owner',
  templateUrl: './dashboard-owner.component.html',
  styleUrls: ['./dashboard-owner.component.css']
})
export class DashboardOwnerComponent {
  ownerName: string = 'Nombre del Dueño'; // Variable para el nombre del dueño
  currentLanguage: string = 'EN'; // Idioma actual

  constructor(private translate: TranslateService) {
    // Inicializa el idioma actual
    this.currentLanguage = this.translate.currentLang?.toUpperCase() || 'EN';
  }

  /**
   * Cambia el idioma de la aplicación
   */
  switchLanguage(): void {
    const newLang = this.translate.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(newLang);
    this.currentLanguage = newLang.toUpperCase(); // Actualiza el idioma mostrado en el botón
  }

  /**
   * Redirige al inicio de sesión al cerrar sesión
   */
  logout(): void {
    window.location.href = '/sign-in'; // Redirige al inicio de sesión
  }
}
