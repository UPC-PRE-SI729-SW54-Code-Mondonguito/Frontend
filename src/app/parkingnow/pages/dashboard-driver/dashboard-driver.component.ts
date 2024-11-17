import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importamos Router para la redirección
import { TranslateService } from '@ngx-translate/core';  // Si aún no lo tienes para traducir

@Component({
  selector: 'app-dashboard-driver',
  templateUrl: './dashboard-driver.component.html',
  styleUrls: ['./dashboard-driver.component.css']
})
export class DashboardDriverComponent {

  constructor(private router: Router, private translate: TranslateService) { }

  // Función para cambiar el idioma
  setLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language); // Guarda el idioma en el almacenamiento local
  }

  // Función para cerrar sesión
  logout() {
    // Elimina cualquier información de sesión (por ejemplo, token de autenticación, usuario)
    localStorage.removeItem('authToken');  // Asegúrate de eliminar el token u otros datos de la sesión
    this.router.navigate(['/login']);  // Redirige al login
  }
}
