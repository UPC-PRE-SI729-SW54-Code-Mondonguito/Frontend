import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core'; // Asegúrate de importar esto

@Component({
  selector: 'app-owner-configuration',
  templateUrl: './owner-configuration.component.html',
  styleUrls: ['./owner-configuration.component.css']
})
export class OwnerConfigurationComponent {
  showMore: boolean = false;
  selectedLanguage: string; // Cambiado para que se inicialice en el constructor
  refundForm: FormGroup;
  theftDescription: string = '';

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    // Inicializar el formulario de reembolso
    this.refundForm = this.fb.group({
      name: [''],
      email: [''],
      reason: ['']
    });

    // Obtener el idioma actual al iniciar el componente
    this.selectedLanguage = this.translate.currentLang || 'es'; // Establece 'es' como idioma por defecto
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  submitRefund() {
    if (this.refundForm.valid) {
      console.log('Formulario enviado:', this.refundForm.value);
    }
  }

  reportTheft() {
    console.log('Descripción del robo:', this.theftDescription);
  }

  deleteAccount() {
    console.log('Cuenta eliminada');
    // Redireccionar al dashboard-owner si lo deseas
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language; // Cambia el valor de selectedLanguage
    this.translate.use(language); // Cambia el idioma de la traducción
  }
}
