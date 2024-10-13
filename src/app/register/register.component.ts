import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Idioma predeterminado
  }

  // Función para cambiar el idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  // Función para navegar al registro de conductor
  navigateToDriver() {
    this.router.navigate(['/register-driver']);
  }

  // Función para navegar al registro de dueño de playa
  navigateToOwner() {
    this.router.navigate(['/register-owner']);
  }
}
