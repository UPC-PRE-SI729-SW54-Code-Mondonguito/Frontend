import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent {
  registerOwnerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private translate: TranslateService
  ) {
    // Configuración del formulario reactivo
    this.registerOwnerForm = this.fb.group({
      fullName: ['', Validators.required],
      businessName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      ruc: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      address: ['', Validators.required]
    }, { validator: this.passwordsMatch });
  }

  // Validador personalizado para confirmar que las contraseñas coincidan
  private passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  // Cambiar idioma
  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  // Envío del formulario
  onSubmit(): void {
    if (this.registerOwnerForm.valid) {
      console.log('Formulario válido:', this.registerOwnerForm.value);
      this.router.navigate(['/dashboard-owner']); // Redirige al Dashboard del Propietario
    } else {
      console.log('Formulario inválido');
      this.registerOwnerForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
    }
  }
}
