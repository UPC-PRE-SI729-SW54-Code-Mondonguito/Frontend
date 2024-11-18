import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Idioma predeterminado
  }

  // Cambia el idioma de la aplicación
  switchLanguage(language: string): void {
    this.translate.use(language);
    console.log(`Idioma cambiado a: ${language}`);
  }

  // Navegar al registro de conductor
  navigateToDriver(): void {
    this.router.navigate(['/register-driver']);
  }

  // Navegar al registro de dueño de estacionamiento
  navigateToOwner(): void {
    this.router.navigate(['/register-owner']);
  }
}
