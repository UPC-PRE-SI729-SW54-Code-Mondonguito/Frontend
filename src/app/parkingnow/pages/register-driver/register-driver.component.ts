import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.css']
})
export class RegisterDriverComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private router: Router // Agregado para redirección
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      vehiclePlate: ['', Validators.required],
      dni: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value);

      // Mensaje de éxito
      alert(this.translate.instant('REGISTER_DRIVER.SUBMIT_BUTTON') + ' success!');

      // Redirigir al dashboard del conductor
      this.router.navigate(['/dashboard-driver']);
    }
  }
}
