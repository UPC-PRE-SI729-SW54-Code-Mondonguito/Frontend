import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup; // Grupo de formulario

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    // Configuración del formulario con validadores
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo obligatorio y con formato de correo
    });
  }

  // Método para cambiar el idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  // Método al enviar el formulario
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      console.log('Password reset link sent to:', email);
      // Aquí iría la lógica para enviar el enlace de restablecimiento de contraseña
      alert(this.translate.instant('FORGOT_PASSWORD.SUCCESS'));
    } else {
      console.error('Form is invalid');
    }
  }
}
