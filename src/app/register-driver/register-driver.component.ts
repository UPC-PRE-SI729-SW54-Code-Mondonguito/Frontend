import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.css']
})
export class RegisterDriverComponent {
  registerDriverForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerDriverForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      vehiclePlate: ['', Validators.required],
      dni: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerDriverForm.valid) {
      console.log('Formulario de registro de conductor enviado:', this.registerDriverForm.value);
      // Redirigir al dashboard del conductor
      this.router.navigate(['/dashboard-driver']);
    }
  }
}
