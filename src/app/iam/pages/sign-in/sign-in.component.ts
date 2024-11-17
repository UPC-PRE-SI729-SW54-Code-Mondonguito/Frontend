import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup; // Formulario reactivo
  isSubmitting: boolean = false; // Indica si el formulario está en proceso de envío

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    // Idioma predeterminado
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    // Inicializa el formulario reactivo
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo de email con validación
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo de contraseña con validación
      remember: [false] // Campo "Recordarme" con valor por defecto
    });
  }

  // Cambia el idioma de la aplicación
  setLanguage(lang: string): void {
    this.translate.use(lang);
    console.log(`Idioma cambiado a: ${lang}`);
  }

  // Método de envío del formulario
  onSubmit(): void {
    this.isSubmitting = true;

    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);

      // Simula un proceso de envío
      setTimeout(() => {
        this.isSubmitting = false;
        alert('Inicio de sesión exitoso'); // Puedes reemplazar esto con tu lógica de inicio de sesión
      }, 2000);
    } else {
      this.isSubmitting = false;
      console.log('Formulario no válido');
    }
  }
}
