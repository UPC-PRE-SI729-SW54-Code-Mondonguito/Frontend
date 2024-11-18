import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup; // Formulario reactivo
  isSubmitting: boolean = false; // Indica si el formulario está en proceso de envío

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translate: TranslateService
  ) {
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
      const { email, password } = this.loginForm.value;

      // Mock de usuarios
      const mockUsers = [
        { email: 'driver@example.com', password: 'password123', role: 'driver' },
        { email: 'owner@example.com', password: 'password123', role: 'owner' }
      ];

      // Verificar credenciales
      const user = mockUsers.find(u => u.email === email && u.password === password);

      if (user) {
        this.isSubmitting = false;
        if (user.role === 'driver') {
          this.router.navigate(['/dashboard-driver']);
        } else if (user.role === 'owner') {
          this.router.navigate(['/dashboard-owner']);
        }
      } else {
        this.isSubmitting = false;
        alert('Credenciales incorrectas'); // Manejo de errores
      }
    } else {
      this.isSubmitting = false;
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
