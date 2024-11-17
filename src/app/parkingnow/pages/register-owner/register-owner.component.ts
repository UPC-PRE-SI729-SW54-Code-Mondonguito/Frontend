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
    private translate: TranslateService // Servicio de traducción
  ) {
    this.registerOwnerForm = this.fb.group({
      fullName: ['', Validators.required],
      businessName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      ruc: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  // Cambiar idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  onSubmit() {
    if (this.registerOwnerForm.valid) {
      // Lógica de registro, como enviar datos al backend
      console.log('Formulario válido', this.registerOwnerForm.value);

      // Redirigir al dashboard del dueño
      this.router.navigate(['/dashboard-owner']);
    }
  }
}
