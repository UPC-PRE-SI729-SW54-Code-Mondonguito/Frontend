import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent {
  registerOwnerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {  // Importamos el servicio Router
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

  onSubmit() {
    if (this.registerOwnerForm.valid) {
      // Aquí puedes añadir la lógica para el registro en el backend si es necesario

      // Redirigir al dashboard del dueño de playa de estacionamiento
      this.router.navigate(['/dashboard-owner']);  // Redirige al dashboard del dueño de playa
    }
  }
}
