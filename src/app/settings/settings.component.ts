import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  showMore: boolean = false;
  selectedLanguage: string = 'es';
  refundForm: FormGroup;
  theftDescription: string = ''; // Declaración de la variable para descripción del robo

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario de reembolso
    this.refundForm = this.fb.group({
      name: [''],
      email: [''],
      reason: ['']
    });
  }

  // Alternar entre mostrar más o menos texto
  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  // Método para enviar el formulario de reembolso
  submitRefund() {
    if (this.refundForm.valid) {
      console.log('Formulario enviado:', this.refundForm.value);
    }
  }

  // Método para registrar el robo
  reportTheft() {
    console.log('Descripción del robo:', this.theftDescription);
  }

  // Método para eliminar la cuenta
  deleteAccount() {
    console.log('Cuenta eliminada');
    // Redireccionar al login si lo deseas
  }
}
