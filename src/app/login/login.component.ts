import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translate: TranslateService
  ) {
    // Idioma predeterminado: Español
    this.translate.setDefaultLang('es');

    // Inicialización del formulario de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  // Función para cambiar el idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      // Redirigir al dashboard si el formulario es válido
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Formulario inválido');
    }
  }
}
